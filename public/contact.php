<?php
	$name = $_POST['name'];
	$visitor_email = $_POST['email'];
	$phone = $_POST['phone'];
	$message = $_POST['message'];

	$email_from = 'fede.franzo@gmail.com';

	$email_subject = "Nuevo Mensaje desde FZ Adventure";

	$email_body = "Nombre de Usuario: $name.\n".
					"Email del Usuario: $visitor_email.\n".
						"Teléfono del Usuario: $phone.\n".
							"Mensaje: $message.\n";
	
	$to = "fede.franzo@gmail.com";

	$headers = "From: $email_from \r\n";

	$headers .= "Contestar a: $visitor_email \r\n";

	mail($to,$email_subject,$email_body,$headers);

	header("Location: index.html");

	?>