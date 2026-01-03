/* eslint-disable no-undef */
const express = require("express");
const claimRouter = express.Router();
const claimProductController = require("../controller/claimProductController");
const authToken = require("../authToken");

claimRouter.post("/claim", authToken.verifyToken, claimProductController.claimProduct);

claimRouter.get("/my-claims", authToken.verifyToken, claimProductController.getMyClaims);

module.exports = claimRouter;
