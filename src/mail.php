<?php

$errorMSG = "";

// NAME
if (empty($_POST["name"])) {
    $errorMSG = "Jméno a příjmení je povinné ";
} else {
    $name = html_entity_decode($_POST["name"]);
}
// PHONE
if (empty($_POST["phone"])) {
    $errorMSG = "Telefon je povinný ";
} else {
    $phone = $_POST["phone"];
}

// EMAIL
if (empty($_POST["email"])) {
    $errorMSG .= "Email je povinný ";
} else {
    $email = $_POST["email"];
}

// MESSAGE
if (empty($_POST["message"])) {
    $errorMSG .= "Zpráva je povinná ";
} else {
    $message = $_POST["message"];
}

// Recaptcha
if (empty($_POST["g-recaptcha-response"])) {
    $errorMSG .= "Špatně zadaná reCAPTCHA";
} else {
    $captcha = $_POST["g-recaptcha-response"];
}

// Force PHP to use the UTF-8 charset
//header('Content-Type: text/html; charset=utf-8');

// Define the sender
$sender = $email;
// or:
// $sender = '=?UTF-8?B?' . base64_encode('John Döe') . '?= <sender@domain.com>';

// Define the recipient
$recipient = 'pavel.fric@beeonline.cz';
// or:
// $recipient = '=?UTF-8?B?' . base64_encode('Margret Müller') . '?= <recipient@domain.com>';

// Add custom headers
$headers = 'Content-Type: text/plain; charset=utf-8' . "\r\n";
$headers .= 'Content-Transfer-Encoding: base64' . "\r\n";
$headers .= 'From: ' . $sender;

// Define and Base64 encode the subject line
$subject_text = 'Nová zpráva z webu BeeOnline.cz od ' . $name . '';
$subject = '=?UTF-8?B?' . base64_encode($subject_text) . '?=';

// prepare email body text
$Body = "";
$Body .= "Jméno a příjmení: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Telefon: ";
$Body .= $phone;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Zpráva: ";
$Body .= $message;
$Body .= "\n";

// Define and Base64 the email body text
$message = base64_encode($Body);

$secretKey = "6LeMwOcUAAAAAFvQt84IeTzdfdRxVDhR3qe3DYSS";
$ip = $_SERVER['REMOTE_ADDR'];
// post request to server
$url = 'https://www.google.com/recaptcha/api/siteverify?secret=' . urlencode($secretKey) .  '&response=' . urlencode($captcha);
$response = file_get_contents($url);
$responseKeys = json_decode($response,true);
// should return JSON with success as true
if($responseKeys["success"]) {
    $success = mail($recipient, $subject, $message, $headers);
} else {
    $errorMSG .= "Špatně zadaná reCAPTCHA";
}

// redirect to success page
if ($success && $errorMSG == "") {
    echo json_encode('success');
} else {
    if ($errorMSG == "") {
        echo "Odeslání nebylo úspěšné";
    } else {
        echo $errorMSG;
    }
}

?>
