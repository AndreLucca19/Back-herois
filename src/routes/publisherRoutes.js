const express = require("express");
const router = express.Router();
const publisherController = require("../controllers/publisherController");

router.get("/", publisherController.getAllPublishers); 
router.get("/:id", publisherController.getPublisher); 
module.exports = router;
