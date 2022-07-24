const express = require("express");
const router = express.Router();
const AssuranceController = require('../controllers/AssuranceController')

/**
 * @Path /
 */

 router.post("/create",AssuranceController.addInfo);
 router.get("/:idclient",AssuranceController.getClientInfo);

 module.exports = router;