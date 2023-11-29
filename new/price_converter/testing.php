<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <form method="post" action="testing.php">
    <input id="money" name="money" type="text">
    <button id="rtd" name="rtd" type="submit">Dollar</button>
    <button id="dtr" name="dtr" type="submit">Rupees</button>
  </form>
</body>

<?php
  if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $money = $_POST['money'];
    if(isset($_POST['dtr'])){
      $dollar = $money * 80;
      echo "Rupees = $dollar";
    }
    if(isset($_POST['rtd'])){
      $rupees = $money / 80;
      echo "Dollar = $rupees";
    }
  }
?>

</html>