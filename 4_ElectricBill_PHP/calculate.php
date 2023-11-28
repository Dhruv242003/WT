<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the input value
    $units = $_POST["units"];

    // Validate input
    if (!empty($units) && is_numeric($units) && $units > 0) {
        // Calculate the bill (for simplicity, assuming a fixed rate per unit)
        $ratePerUnit = 0.10;
        $billAmount = $units * $ratePerUnit;

        // Display the result
        echo "<p>Electricity Bill: &#x20B9;" . number_format($billAmount, 2) . "</p>";
    } else {
        echo "Please enter a valid number of units.";
    }
}
?>
