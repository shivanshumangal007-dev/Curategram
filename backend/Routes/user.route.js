import { Router } from "express";
import { registerController } from "../Controllers/user.controller";


const router = Router();

//register Route
router.post('/register', registerController);