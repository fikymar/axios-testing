import axios from "axios";
import { useEffect, useState } from "react";
import NewArticle from "./components/NewArticle";
import "./scss/App.css";

export const baseURL = "https://jsonplaceholder.typicode.com/posts";

function App() {
	const [post, setPost] = useState(null);
	const [articleId, setArticleId] = useState(1);

	useEffect(() => {
		axios.get(`${baseURL}/${articleId}`).then((res) => {
			setPost(res.data);
		});
	}, [articleId]);

	if (!post) return "No post!";

	return (
		<main className="App">
			<section className="articles">
				<h1>Load articles</h1>
				<label htmlFor="Number">
					Enter number of article you want to read:
				</label>
				<input
					type="number"
					name="Number"
					onChange={(e) => setArticleId(e.target.value)}
					placeholder={1}
				/>
				<article>
					<p className="articleNr"> Article nr. {post.id}</p>
					<h2>{post.title.toUpperCase()}</h2>
					<p>{post.body}</p>
				</article>
			</section>

			<NewArticle />
		</main>
	);
}

export default App;
