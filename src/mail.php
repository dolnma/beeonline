<?php

$errorMSG = "";

// NAME
if (empty($_POST["firstname"])) {
    $errorMSG = "Jméno je povinné ";
} else {
    $firstname = $_POST["firstname"];
}

if (empty($_POST["surname"])) {
    $errorMSG = "Příjmení je povinné ";
} else {
    $surname = $_POST["surname"];
}

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

//Add your email here
$EmailTo = "info@performio.cz";
$Subject = "Nová zpráva z webu Performio.cz od ".$firstname." ".$surname."";

// prepare email body text
$Body = "";
$Body .= "Jméno: ";
$Body .= $firstname;
$Body .= "\n";
$Body .= "Příjmení: ";
$Body .= $surname;
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

// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);

// redirect to success page
if ($success && $errorMSG == ""){
    echo "success";
}else{
    if($errorMSG == ""){
        echo "Odeslání nebylo úspěšné";
    } else {
        echo $errorMSG;
    }
}

?>
