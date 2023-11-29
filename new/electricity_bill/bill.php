<!DOCTYPE html>

<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    form {
      display: flex;
      flex-direction: column;
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="form">

      <form action="bill.php" method="post" id="electricitybillForm">
        <label for="input1">Enter Units:</label>
        <input type="number" id="input1" name="input1">
        <label for="input2">Enter Name:</label>
        <input type="text" id="input2" name="input2">
        <label for="input3">Enter Address:</label>
        <input type="text" id="input3" name="input3">
        <button type="submit">calculate</button>
      </form>

    </div>
    <div>
      <?php
      if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (isset($_POST['input2'])) {
          $input2 = ($_POST['input2']);
          echo "<h4>Name: $input2</h4>";
        }
        if (isset($_POST['input3'])) {
          $input3 = ($_POST['input3']);
          echo "<h4>Name: $input3</h4>";
        }
        if (isset($_POST['input1'])) {
          $input1 = intval($_POST['input1']);
          $billAmount = 0;
          if ($input1 <= 50) {
            $billAmount = $input1 * 3.50;
          } elseif ($input1 <= 150) {
            $billAmount = 50 * 3.50 + ($input1 - 50) * 4;
          } elseif ($input1 <= 250) {
            $billAmount = 50 * 3.50 + 100 * 4.00 + ($input1 - 150) * 5.20;
          } else {
            $billAmount = 50 * 3.50 + 100 * 4.00 + ($input1 - 250) * 6.50;
          }
          echo "<h4>Ur Bill is :  </h4>$billAmount";
        }
      }
      ?>
    </div>
  </div>
</body>

</html>
