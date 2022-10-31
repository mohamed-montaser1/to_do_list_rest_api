const express = require("express");
const router = express.Router();

router.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "This Page Not Found 😴",
  });
  // .send("<center><h1>This Page Not Found 😴</h1></center>");
});

module.exports = router;
