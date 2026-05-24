const express = require("express");
const cors = require("cors");
const app = express();
const email = "abc@gmail.com";
const password = "123";

app.use(cors());
app.use(express.json());
app.post("/login", (req, res) => {
  const { email: userEmail, password: userPassword } = req.body;

  if (userEmail === email && userPassword === password) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});