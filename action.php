<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $Gender = $_POST["gender"];
}

echo"<h2>Thank You for Your Time</h2>";
echo "<p>Name: " . $name . "</p>";
echo "<p>Gender is: " . $Gender . "</p>";
echo "<p>Email: " . $email . "</p>";
echo "<p>Message: " . $message . "</p>";
?>