import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Add.module.css";
import axios from "axios";

const AddNewDish = () => {
	const router = useRouter();

	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [url, setUrl] = useState("");
	const [author, setAuthor] = useState("");
	const [ingredients, setIngredients] = useState([]);
	const [procedure, setProcedure] = useState("");
	async function addNew() {
		await axios
			.post("/api/addNew", {
				author,
				name,
				description,
				image_url: url,
				ingredients: ingredients,
				procedure,
			})
			.then(() => router.push("/"))
			.catch((e) => alert(e.message));
	}

	return (
		<div>
			<div className={styles.main}>
				<div>
					<h1>Add New Recipe</h1>
				</div>
				<div className={styles.box}>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							addNew();
						}}
					>
						<div className={styles.grid}>
							<input
								type="text"
								name="addName"
								placeholder="Food Name"
								className={styles.inFields}
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
							<input
								type="text"
								name="addAuthor"
								placeholder="Your Name"
								className={styles.inFields}
								value={author}
								onChange={(e) => setAuthor(e.target.value)}
							/>
						</div>
						<div>
							<input
								type="text"
								name="addDescription"
								placeholder="Food Description"
								className={styles.inFields}
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							/>
						</div>
						<div>
							<input
								type="text"
								name="addUrl"
								placeholder="Image URL"
								className={styles.inFields}
								value={url}
								onChange={(e) => setUrl(e.target.value)}
							/>
						</div>
						<div>
							<textarea
								type="text"
								className={styles.itemsField}
								cols="40"
								rows="5"
								placeholder={`Ingredients Required for making ${
									name ? name : "My Awesome Dish"
								}... (Separate by Comma)`}
								value={ingredients}
								onChange={(e) =>
									setIngredients(e.target.value.split(","))
								}
							/>
						</div>
						<div>
							<textarea
								type="text"
								className={styles.itemsField}
								cols="40"
								rows="10"
								placeholder={`Procedure For making ${
									name ? name : "My Awesome Dish"
								}... (Separate by Comma)`}
								value={procedure}
								onChange={(e) => setProcedure(e.target.value)}
							/>
						</div>
						<div className={styles.subBtn}>
							<button type="submit" className={styles.addBtn}>
								Add
							</button>
							<button className={styles.canBtn}>Cancel</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AddNewDish;
