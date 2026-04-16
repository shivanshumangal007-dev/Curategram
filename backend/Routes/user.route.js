import { Router } from "express";
import { LoginController, registerController } from "../Controllers/user.controller.js";


const router = Router();

//register Route
router.post('/register', registerController);
router.post('/', LoginController);


export default router;