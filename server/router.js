const express = require("express");
const router = express.Router();

//this is how an express router is created and on the root page. we use this as middleware in our app

router.get("/", (req, res) => {
	res.send("server is up and running!!!");
});

module.exports = router;
