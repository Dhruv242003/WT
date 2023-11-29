<?php
$conn = new mysqli('localhost','root','root','crud');

if($conn){
    echo "Connection successful";
}else{
    die(mysqli_error($conn));
}
?>
