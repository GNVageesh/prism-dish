import React from "react";
import styles from "../styles/FoodCard.module.css";
import Image from "next/image";
import Link from "next/link";

const FoodCard = ({ data }) => {
	return (
		<div>
			<div>
				<div>
					<div className={styles.main}>
						{data.map((food) => (
							<div key={food.name}>
								<div>
									<div>
										<div className={styles.card}>
											<Image
												className={styles.image}
												src={food.image_url}
												width={350}
												height={350}
												alt="Image"
											/>
											<h1 className={styles.title}>
												{food.name}
											</h1>
											<h2 className={styles.desc}>
												{food.description}
											</h2>
											<h3 className={styles.ingredients}>
												Items Required:{" "}
												{food.ingredients.length}
											</h3>
											<Link
												href={`/dishes/recipe/${food.id}`}
											>
												<a className={styles.link}>
													Read More &rarr;
												</a>
											</Link>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default FoodCard;
