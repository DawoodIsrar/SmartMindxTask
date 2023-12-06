const express = require('express');

const deleteTask= require('../controllers/deleteTask')
const router = express.Router();

router.delete('/deleteTask/:id', deleteTask)
module.exports = router;