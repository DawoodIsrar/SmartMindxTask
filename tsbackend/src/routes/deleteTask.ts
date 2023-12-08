import express from 'express';
import deleteTask from '../controllers/deleteTask';
const router = express.Router();

router.delete('/deleteTask/:id', deleteTask);

export default router;
