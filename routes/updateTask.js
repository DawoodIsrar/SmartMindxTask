const express = require('express');

const updateTask= require('../controllers/updateTask')
const router = express.Router();

router.put('/updateTask', updateTask)
module.exports = router;