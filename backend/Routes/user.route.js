import { Router } from "express";
import {
	LoginController,
	meControler,
	registerController,
} from "../Controllers/user.controller.js";
import auth from "../Middleware/auth.js";

const router = Router();

//register Route
router.post("/register", registerController);
router.post("/", LoginController);
router.get("/auth/me", auth, meControler);

export default router;
