import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
	const data = req.body;
	try {
		const result = await prisma.dishes.create({
			data: {
				...data,
			},
		});
		res.status(200).json(result);
	} catch (e) {
		console.log(e);
		res.status(403).json({ err: "Error while adding a new Dish" });
	}
};
