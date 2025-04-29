const express = require("express");
const router = express.Router();
const herosController = require("../controllers/herosController");

router.get("/", herosController.getAllHeros); 
router.get("/:id", herosController.getHero); 
router.post("/", herosController.createHero);
router.put("/:id", herosController.updateHero); 
router.delete("/:id", herosController.deleteHero); 

module.exports = router;
