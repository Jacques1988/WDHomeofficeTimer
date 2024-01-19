import { Router } from 'express';
import { saveTimeAction } from '../controllers/workTimes.js';


const router = Router();

router.post('/', saveTimeAction);

export { router }