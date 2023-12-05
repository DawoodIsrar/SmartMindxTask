const express = require('express');

const deleteTask= require('../controllers/deleteTask')
const router = express.Router();

router.delete('/deleteTask', deleteTask)
module.exports = router;