import { Router } from "express";
import { signUpAction, loginAction, getUser } from "../controllers/user.js";

const router = Router();

router.post('/', loginAction);
router.post('/signUp', signUpAction);
router.get('/timer/:id', getUser);

export { router };