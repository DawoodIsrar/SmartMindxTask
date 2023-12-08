import express from 'express';
import createTask from '../controllers/createTask';
const router = express.Router();

router.post('/addTask', createTask);

export default router;
