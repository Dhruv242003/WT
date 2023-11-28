<?php
$server = "localhost";
$password = "c0c@c0l@";
$username = "root";
$database = "crudoperation";

$conn = new mysqli($server, $username, $password, $database);

if (!$conn) {
    die(mysqli_error($conn));
}
?>