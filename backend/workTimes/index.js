import { Router } from 'express';
import { saveTimeAction, fetchUserTimesAction } from '../controllers/workTimes.js';


const router = Router();

router.post('/saveTimes', saveTimeAction);
router.get('/fetchUserTimes/:id/:date', fetchUserTimesAction)

export { router }