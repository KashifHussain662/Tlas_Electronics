<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Email to send the message
    $to = "kashiif662@gmail.com";
    $subject = "New Message from Contact Us Form";
    $body = "You have received a new message from $name ($email):\n\n$message";
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "<script>toastr.success('Message sent successfully!');</script>";
    } else {
        echo "<script>toastr.error('There was an error sending the message.');</script>";
    }
}
?>
