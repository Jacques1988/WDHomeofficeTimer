import { Router } from "express";
import { loginAction, homeRoute } from "./user.model.js";

const router = Router();
router.get('/', homeRoute);
router.post('/login', loginAction);

export { router };