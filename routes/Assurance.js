const express = require("express");
const router = express.Router();
const AssuranceController = require('../controllers/AssuranceController')

/**
 * @Path /
 */

 router.post("/create",AssuranceController.addInfo);
 router.get("/:refclient",AssuranceController.getClientInfo);
 router.get("/getClient/:numcontrat",AssuranceController.getClientInfoByNumContrat);

 module.exports = router;