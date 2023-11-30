// Needed Resources
const express = require("express");
const router = new express.Router();
const utilities = require("../utilities");
const accountController = require("../controllers/accountController");
const regValidate = require("../utilities/account-validation");

// Route when login button is clicked
router.get("/login", utilities.handleError(accountController.buildLogin));

// Handle registration post request
router.post(
  "/register",
  regValidate.registrationRules(),
  regValidate.checkRegData,
  utilities.handleError(accountController.registerAccount)
);

// Registration route
router.get("/register", utilities.handleError(accountController.buildRegister));

// Process the login request
router.post(
  "/login",
  regValidate.loginRules(),
  regValidate.checkLoginData,
  utilities.handleError(accountController.accountLogin)
);

module.exports = router;
