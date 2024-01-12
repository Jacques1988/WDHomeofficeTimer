import { Router } from "express";
import { signUpAction, loginAction, homeRoute } from "./user.model.js";

const router = Router();
router.get('/', homeRoute);
router.post('/login', loginAction);
router.post('/signUp', signUpAction);

export { router };