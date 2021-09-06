import React from "react";
import { PrismaClient } from "@prisma/client";
import FoodCard from "../../components/FoodCard";

export async function getServerSideProps() {
	const prisma = new PrismaClient();
	const data = await prisma.dishes.findMany();

	return {
		props: { data },
	};
}

const DishesIndex = ({ data }) => {
	return (
		<div>
			<div>
				<div>
					<FoodCard data={data} />
				</div>
			</div>
		</div>
	);
};

export default DishesIndex;
