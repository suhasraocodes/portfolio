<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate input
    $name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST["email"], FILTER_VALIDATE_EMAIL);
    $phone = filter_var($_POST["phone"], FILTER_SANITIZE_NUMBER_INT);
    $subject = filter_var($_POST["subject"], FILTER_SANITIZE_STRING);
    $message = filter_var($_POST["message"], FILTER_SANITIZE_STRING);

    if ($email) {
        $to = "raosuhas0@gmail.com"; // Replace with your email address
        $headers = "From: $email" . "\r\n" .
                   "Reply-To: $email" . "\r\n" .
                   "X-Mailer: PHP/" . phpversion();
        $body = "Name: $name\nEmail: $email\nPhone: $phone\n\nMessage:\n$message";

        if (mail($to, $subject, $body, $headers)) {
            echo "Message sent successfully!";
        } else {
            echo "Failed to send message.";
        }
    } else {
        echo "Invalid email address.";
    }
} else {
    echo "Invalid request method.";
}
?>
