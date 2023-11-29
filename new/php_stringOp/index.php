<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      margin: 50px;
    }

    textarea {
      width: 80%;
      height: 100px;
      margin-bottom: 20px;
    }

    button {
      padding: 10px;
      font-size: 16px;
    }
  </style>
  <title>String Operations</title>
</head>

<body>

  <h1>String Operations</h1>

  <form method="post">
    <textarea name="inputString" placeholder="Enter a string"></textarea>
    <br>
    <button type="submit" name="toUpperCase">To Uppercase</button>
    <button type="submit" name="toLowerCase">To Lowercase</button>
    <button type="submit" name="capitalizeFirst">Capitalize First Letter</button>
    <button type="submit" name="capitalizeLast">Capitalize Last Letter</button>
  </form>

  <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $inputString = $_POST["inputString"];
      if (isset($_POST["toUpperCase"])) {
        $result = strtoupper($inputString);
        echo "<p>Result: $result</p>";
      } elseif (isset($_POST["toLowerCase"])) {
        $result = strtolower($inputString);
        echo "<p>Result: $result</p>";
      } elseif (isset($_POST["capitalizeFirst"])) {
        $result = ucwords($inputString);
        echo "<p>Result: $result</p>";
      } elseif (isset($_POST["capitalizeLast"])) {
        $result = ucwords(strtolower($inputString));
        echo "<p>Result: $result</p>";
      }
    }
  ?>

</body>

</html>