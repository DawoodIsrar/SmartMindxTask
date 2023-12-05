const express = require('express');
const task = require('../controllers/getAllTask');
const router = express.Router();
router.get('/allTasks',task)
module.exports = router;