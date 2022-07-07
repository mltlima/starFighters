import { Router } from 'express';
import { battle, ranking } from '../controllers/dataController.js';

const router = Router();

router.get("/ranking", ranking);
router.post("/battle", battle);

export default router;