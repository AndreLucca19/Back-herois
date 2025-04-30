const express = require('express');
const router = express.Router();
const publisherController = require('../controllers/publisherController');
const apiKeyMiddleware = require('../config/apiKey');

router.use(apiKeyMiddleware);
router.get('/publishers', publisherController.getAllPublishers);
router.get('/publisher/:id', publisherController.getPublisherById);
router.post("/publisher", publisherController.createPublisher);
router.put("/publisher/:id", publisherController.updatePublisher);
router.delete("/publisher/:id", publisherController.deletePublisher);

module.exports = router;