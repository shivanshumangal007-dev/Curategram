import prisma from "../DB/db.connection.js";

const addController = async (req, res) => {
	let user = req.user; // Assuming user is attached to the request object after authentication
	if (!user) {
		return res.status(401).json({ message: "Unauthorized" });
	}

	const { title, link } = req.body;
	try {
		const item = await prisma.savedItem.create({
			data: {
				title,
				link,
				userID: user.id,
				tags: [],
			},
		});

		return res
			.status(200)
			.json({ message: "Item added to saved items", item });
	} catch (error) {
        return res.status(500).json({ message: "Error adding item to saved items", error: error.message });
        console.error("Error adding item to saved items:", error);
    }
};

export { addController };
