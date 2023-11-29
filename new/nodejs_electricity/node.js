const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/calculateBill", (req, res) => {
  const units = parseInt(req.body.units);
  let total = 0;

  if (isNaN(units) || units < 0) {
    return res
      .status(400)
      .json({ error: "Invalid input. Please enter a valid number of units." });
  }

  // Your billing logic here...
  // (Note: This logic should be improved and adjusted based on your actual requirements.)

  return res.json({ total });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
