import axios from "axios";
import { useEffect, useState } from "react";
import "./scss/App.css";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

function App() {
	const [post, setPost] = useState(null);
	const [articleId, setArticleId] = useState(1);

	const [newArticle, setNewArticle] = useState(1);
	const [title, setTitle] = useState("Your title");
	const [newArticleBody, setNewArticleBody] = useState("Your text");

	useEffect(() => {
		axios.get(`${baseURL}/${articleId}`).then((res) => {
			setPost(res.data);
		});
	}, [articleId]);

	function handleChange(e) {
		setTitle(e.target.value);
	}

	function handleChangeBody(e) {
		setNewArticleBody(e.target.value);
	}

	function createPost() {
		axios
			.post(baseURL, {
				id: "101",
				title: title.toUpperCase(),
				body: newArticleBody,
			})
			.then((res) => {
				setNewArticle(res.data);
			});
	}

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
			<section className="createArticle">
				<h1>Post your article</h1>
				<label htmlFor="title">Enter title of your article: </label>
				<input
					type="text"
					name="title"
					onChange={handleChange}
					placeholder={title}
				/>
				<label htmlFor="body">Enter your text: </label>
				<textarea
					type="text"
					name="body"
					onChange={handleChangeBody}
					placeholder={newArticleBody}
				/>
				<button onClick={createPost}>Create Post</button>
				<article>
					<p className="articleNr"> {newArticle.id}</p>
					<h2>{newArticle.title}</h2>
					<p>{newArticle.body}</p>
				</article>
			</section>
		</main>
	);
}

export default App;
