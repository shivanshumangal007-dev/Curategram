import { Router } from "express";
import { LoginController, meControler, registerController } from "../Controllers/user.controller.js";


const router = Router();

//register Route
router.post('/register', registerController);
router.post('/', LoginController);
router.get('/auth/me' , meControler);


export default router;