<?php

// define variables and set to empty values
$name_error = $email_error = $phone_error = $guest_error = $date_error = "";
$name = $email = $phone = $message = $guests = $date = $where = $success = "";

//form is submitted with POST method
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["name"])) {
    $name_error = "Name is required";
  } else {
    $name = test_input($_POST["name"]);
    // check if name only contains letters and whitespace
    if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
      $name_error = "Only letters and white space allowed";
    }
  }

  if (empty($_POST["email"])) {
    $email_error = "Email is required";
  } else {
    $email = test_input($_POST["email"]);
    // check if e-mail address is well-formed
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $email_error = "Invalid email format";
    }
  }

  if (empty($_POST["phone"])) {
    $phone_error = "Phone is required";
  } else {
    $phone = test_input($_POST["phone"]);
  }

  if (empty($_POST["guests"])) {
    $guest_error = "Number of guests is required";
  } else {
    $guests = test_input($_POST["guests"]);
    // check if number of guests is well-formed
    if (!preg_match("/^[1-9][0-9]{0,3}$/",$guests)) {
      $guest_error = "Invalid number of guests";
    }
  }

    if (empty($_POST["date"])) {
    $date_error = "Date of event is required";
  } else {
    $date = test_input($_POST["guests"]);

  }

  if (empty($_POST["message"])) {
    $message = "";
  } else {
    $message = test_input($_POST["message"]);
  }
   if(!empty($_POST['website'])) die();
  if ($name_error == '' and $email_error == '' and $phone_error == '' and $guest_error == '' and $date_error == '' ){
      $message_body = '';
      unset($_POST['submit']);
      foreach ($_POST as $key => $value){
          $message_body .=  "$key: $value\n";
      }

      $to = 'info@matakata.com.au';
      $subject = 'Contact Page Form';
      if (mail($to, $subject, $message_body)){
          $success = "Message sent, thank you for contacting us!";
          $name = $email = $phone = $message = $guests = $date = $where = '';
      }
  }

}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
