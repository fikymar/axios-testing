import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import ArticleById from "./components/ArticleById";
import NewArticle from "./components/NewArticle";
import "./scss/App.css";
import Nav from "./components/Nav";

export const baseURL = "https://jsonplaceholder.typicode.com/posts";

function App() {
	const [posts, setPosts] = useState([]);
	const [showArticles, setShowArticles] = useState(1);

	useEffect(() => {
		axios.get(`${baseURL}`).then((res) => {
			setPosts(res.data);
			console.log(posts);
		});
	}, []);

	if (!posts) return "No post!";

	function handleClick() {
		setShowArticles(showArticles + 4);
	}

	return (
		<div className="App">
			<Router>
				<Nav />

				<Switch>
					<main>
						<h1>Articles</h1>
						<Route path="/articles">
							<h2>Load articles</h2>
							{posts
								.filter(
									(post) =>
										post.id < showArticles + 4 && post.id >= showArticles
								)
								.map((post) => (
									<article key={post.id}>
										<p className="articleNr"> Article nr. {post.id}</p>
										<h3>{post.title.toUpperCase()}</h3>
										<p>{post.body}</p>
									</article>
								))}
							<button onClick={handleClick}>Next 4 articles</button>
						</Route>
						<Route path="/id">
							<ArticleById />
						</Route>
						<Route path="/new">
							<NewArticle />
						</Route>
					</main>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
