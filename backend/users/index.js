import { Router } from "express";
import { signUpAction, loginAction, homeRoute, getUsernameAction } from "../controllers/user.js";

const router = Router();
router.get('/', homeRoute);
router.post('/login', loginAction);
router.post('/signUp', signUpAction);
router.get('/timer/:id', getUsernameAction);

export { router };