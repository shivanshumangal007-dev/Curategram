import prisma from "../DB/db.connection.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const registerController = async (req, res) => {
	const { username, email, password, gender } = req.body;
	const ExistingUser = await prisma.user.findMany({
		where: {
			OR: [
				{
					email: email,
				},
				{
					username: username,
				},
			],
		},
	});
	if (ExistingUser.length > 0) {
		return res
			.status(400)
			.json({ message: "User already exists", ExistingUser });
	}
	let newHashpassword = "";
	await bcrypt.hash(password, 10).then(function (hash) {
		newHashpassword = hash;
	});
	const user = await prisma.user.create({
		data: {
			username,
			email,
			password: newHashpassword,
			gender,
		},
	});
	return res
		.status(201)
		.json({ message: "User created successfully you can login now", user });
};

const LoginController = async (req, res) => {
	const { email, password } = req.body;
	const user = await prisma.user.findUnique({
		where: {
			email: email,
		},
	});
	if (!user) {
		return res.status(400).json({ message: "User not found" });
	}
	let result = await bcrypt.compare(password, user.password);
	if (!result) {
		return res.status(400).json({ message: "Invalid password" });
	}

	const token = await jwt.sign({ id: user.id }, process.env.JWT_SECRET);
	res.cookie("token", token, {
		httpOnly: true,
		secure: false, // true in production https
		sameSite: "lax",
	});
	return res.status(200).json({ message: "Login successful", user, token });
};

const meControler = (req, res) => {
	const token = req.cookies.token;

	if (!token) {
		return res.status(401).json({ message: "Unauthorized" });
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		return res.json({
			user: decoded,
		});
	} catch {
		return res.status(401).json({ message: "Invalid token" });
	}
};

export { registerController, LoginController, meControler };
