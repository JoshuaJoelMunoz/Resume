(function($) {

	skel.breakpoints({
		large: '(max-width: 1680px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$html = $('html');

			$html.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$html.removeClass('is-loading');
				}, 0);
			});

			if (skel.vars.mobile) {

				var $wrapper;

					$body.wrapInner('<div id="wrapper" />');
					$wrapper = $('#wrapper');

						if (skel.vars.os == 'ios')
							$wrapper
								.css('margin-top', -25)
								.css('padding-bottom', 25);

						$wrapper.on('scroll', function() {
							$window.trigger('scroll');
						});

					$window.on('load.hl_scrolly', function() {

						$('.scrolly').scrolly({
							speed: 1500,
							parent: $wrapper,
							pollOnce: true
						});

						$window.off('load.hl_scrolly');

					});

					$html.addClass('is-touch');

			}
			else {

					$('.scrolly').scrolly({
						speed: 1500
					});

			}

			$('form').placeholder();

			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

			var $header = $('#header'),
				$headerTitle = $header.find('header'),
				$headerContainer = $header.find('.container');

				if (!skel.vars.mobile) {

					$window.on('load.hl_headerTitle', function() {

						skel.on('-medium !medium', function() {

							$headerTitle
								.css('position', 'fixed')
								.css('height', 'auto')
								.css('top', '50%')
								.css('left', '0')
								.css('width', '100%')
								.css('margin-top', ($headerTitle.outerHeight() / -2));

						});

						skel.on('+medium', function() {

							$headerTitle
								.css('position', '')
								.css('height', '')
								.css('top', '')
								.css('left', '')
								.css('width', '')
								.css('margin-top', '');

						});

						$window.off('load.hl_headerTitle');

					});

				}

				skel.on('-small !small', function() {
					$header.scrollex({
						terminate: function() {

							$headerTitle.css('opacity', '');

						},
						scroll: function(progress) {

								if (progress > 0.5)
									x = 1 - progress;
								else
									x = progress;

								$headerTitle.css('opacity', Math.max(0, Math.min(1, x * 2)));

						}
					});
				});

				skel.on('+small', function() {

					$header.unscrollex();

				});

			$('.main').each(function() {

				var $this = $(this),
					$primaryImg = $this.find('.image.primary > img'),
					$bg,
					options;

					if ($primaryImg.length == 0)
						return;

					$bg = $('<div class="main-bg" id="' + $this.attr('id') + '-bg"></div>')
						.css('background-image', (
							'url("images/overlay.png"), url("' + $primaryImg.attr('src') + '")'
						))
						.appendTo($body);

					options = {
						mode: 'middle',
						delay: 200,
						top: '-10vh',
						bottom: '-10vh'
					};

					if (skel.canUse('transition')) {

						options.init = function() { $bg.removeClass('active'); };
						options.enter = function() { $bg.addClass('active'); };
						options.leave = function() { $bg.removeClass('active'); };

					}
					else {

						$bg
							.css('opacity', 1)
							.hide();

						options.init = function() { $bg.fadeOut(0); };
						options.enter = function() { $bg.fadeIn(400); };
						options.leave = function() { $bg.fadeOut(400); };

					}

					$this.scrollex(options);

			});

	});

})(jQuery);
