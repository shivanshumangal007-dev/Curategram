import { Router } from "express";
import auth from "../Middleware/auth.js";
import { addController } from "../Controllers/Items.controller.js";

const router = Router();

// Placeholder for saved routes
router.get("/", auth, (req, res) => {
	let user = req.user; // Assuming user is attached to the request object after authentication
	if (!user) {
		return res.status(401).json({ message: "Unauthorized" });
	}
});

router.post("/", auth, addController);
export { router as savedRoutes };
