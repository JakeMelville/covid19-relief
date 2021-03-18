const router = require("express").Router();
const path = require('path');

router.get("/", (req, res) => {
    console.log("GET /");
    res.sendFile(path.join(__dirname, '../public/covid.html'));
})

module.exports = router;
