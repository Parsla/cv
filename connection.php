<?php 

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cv";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "<p>Savienojums izveidots!</p>";
} catch (PDOException $e) {
    echo "<p>Savienojums neizdevās: " . $e->getMessage() . "</p>";
}

?>