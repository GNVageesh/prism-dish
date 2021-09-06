import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>PrismDishes</title>
				<meta
					name="description"
					content="A Website To Popularise Dishes"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to{" "}
					<span className={styles.title1}>PrismDishes</span>
				</h1>

				<p className={styles.description}>A Universe Of Recipes</p>

				<div className={styles.grid}>
					<Link href="/dishes">
						<a className={styles.card}>
							<h2>Goto Food Galaxy &rarr;</h2>
							<p>
								Get to know about all the Dishes and there
								Recipes.
							</p>
						</a>
					</Link>

					<Link href="/dishes/add">
						<a className={styles.card}>
							<h2>Add New Food Planets &rarr;</h2>
							<p>
								Create New Recipes and share it to the public.
							</p>
						</a>
					</Link>
				</div>
			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Made with ❤️ by GN Vageesh
				</a>
			</footer>
		</div>
	);
}
