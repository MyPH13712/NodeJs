import express from "express";
import { signin, signup } from "../controllers/auth";
import { listUser } from "../controllers/user";

const router = express.Router();


router.post('/signup', signup)
router.post('/login', signin)
router.get('/users', listUser);


export default router