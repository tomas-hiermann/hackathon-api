const express = require("express");
const router = express.Router();
router.post("/api", (req, res) => {
  console.log(req.body);
});
module.exports = router;
