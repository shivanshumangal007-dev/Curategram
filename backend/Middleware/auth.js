import prisma from "../DB/db.connection.js";
import jwt from "jsonwebtoken";
const auth = async (req, res, next) => {
	const token = req.cookies.token;

	if (!token) {
		return res.status(401).json({ message: "Unauthorized" });
	}
	console.log("Received token:", token); // Debugging line
	try {
		const decoded = await jwt.verify(token, process.env.JWT_SECRET);
		console.log("Decoded token:", decoded); // Debugging line
		const user = await prisma.user.findUnique({
			where: {
				id: decoded.id,
			},
		});
		if (!user) {
			return res.status(401).json({ message: "Unauthorized" });
		} else {
			req.user = user;
			next();
		}
	} catch (error) {
		console.error("Token verification error:", error);
		return res.status(401).json({ message: "Invalid token" });
	}
};

export default auth;
