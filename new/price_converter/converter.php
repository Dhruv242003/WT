<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>

  <?php

  $testing = "Enter Money :";

  function RSTODL($result)
  {
    $result = $result / 80;
    echo "<h2>The price in dollars is:</h2>" . $result;
  }
  function DLTORS($result)
  {
    $result = 80 * $result;
    echo "<h2>The price in rupees is:</h2>" . $result;
  }
  if (isset($_POST['text'])) {
    $input = intval($_POST['text']);
    if (isset($_POST['dollar'])) {
      RSTODL($input);
    }
    if (isset($_POST['rupees'])) {
      DLTORS($input);
    }
  }
  ?>

  <form action="converter.php" method="post">
    <label for="text"><?php echo "$testing" ?></label>
    <input type="number" id="text" name="text">
    <button type="submit" id="dollar" name="dollar">Rupees to Dollar</button>
    <button type="submit" id="rupees" name="rupees">Dollar to Rupees</button>
  </form>
</body>

</html>