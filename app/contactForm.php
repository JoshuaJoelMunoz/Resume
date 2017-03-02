<?php

	$fullName = $_POST['name'];
	$visitorEmail = $_POST['email'];
	$message = $_POST['message'];

if(isset($_POST['email'])) {

		$email_from = "$visitorEmail";
		$email_subject = "Resume Inquiry";
		$email_body = "You have a new message from $fullName.\n\n".
			"Message:\n\n $visitorEmail \n\n $message";

		$to = "info@joshuajoelmunoz.com";
		$headers = "From: $visitorEmail \r\n";
		$headers = "Reply-To: $visitorEmail \r\n";

		//This sends the message!
		mail($to,$email_subject,$email_body,$headers);
		header('Location: index.html');

}

?>
