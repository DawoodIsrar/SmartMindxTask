import express from 'express';
import updateTask from '../controllers/updateTask';
const router = express.Router();

router.put('/updateTask', updateTask);

export default router;
