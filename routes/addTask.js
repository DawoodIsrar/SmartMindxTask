const express = require('express');
const createTask = require('../controllers/createTask');
const router = express.Router();
router.post('/addTask',createTask)
module.exports = router;