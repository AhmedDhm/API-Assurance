const express = require("express");
const router = express.Router();
const AssuranceController = require('../controllers/AssuranceController')

/**
 * @Path /
 */

 router.post("/create",AssuranceController.addInfo);
 router.get("/:refclient",AssuranceController.getClientInfo);

 module.exports = router;