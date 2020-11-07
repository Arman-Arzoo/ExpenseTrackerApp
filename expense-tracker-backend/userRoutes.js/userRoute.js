const router = require("express").Router();
const userController = require("../userControllers.js/userController");

// get request
router.get("/test",userController.home);

// post request
router.post("/transItem",userController.items)

module.exports = router;