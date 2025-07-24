<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $to = "thakurkumarraju2001@gmail.com";
  $subject = "New Inquiry from Your Website";
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  $body = "Name: $name\nEmail: $email\nMessage:\n$message";
  $headers = "From: $email";

  mail($to, $subject, $body, $headers);
  echo "Thank you for contacting us!";
}
?>
