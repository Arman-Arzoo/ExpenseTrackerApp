const express = require("express");
const router = express.Router();
const transController = require('../controllers/transController');



router.get('/',transController.getTransactions);
router.post('/',transController.addTransactions);
router.delete('/:id',transController.deleteTransactions);


module.exports = router