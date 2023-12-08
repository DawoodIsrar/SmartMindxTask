import express from 'express';
import getAllTask from '../controllers/getAllTask';
const router = express.Router();

router.get('/allTasks', getAllTask);

export default router;
