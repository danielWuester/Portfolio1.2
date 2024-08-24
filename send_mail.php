<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Daten aus dem Formular holen
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    // E-Mail-Inhalt vorbereiten
    $to = "deine_email@domain.de";
    $subject = "Neue Nachricht vom Kontaktformular";
    $body = "Name: $name\nEmail: $email\n\nNachricht:\n$message";
    $headers = "From: $email";

    // E-Mail senden
    if (mail($to, $subject, $body, $headers)) {
        echo "Vielen Dank, deine Nachricht wurde gesendet!";
    } else {
        echo "Entschuldigung, es gab ein Problem beim Senden deiner Nachricht.";
    }
}
?>
