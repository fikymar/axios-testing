import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import ArticleById from "./components/ArticleById";
import NewArticle from "./components/NewArticle";
import "./scss/App.css";
import Nav from "./components/Nav";

export const baseURL = "https://jsonplaceholder.typicode.com/posts";

function App() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		axios.get(`${baseURL}?_limit=4`).then((res) => {
			setPosts(res.data);
			console.log(posts);
		});
	}, []);

	if (!posts) return "No post!";

	return (
		<div className="App">
			<Router>
				<Nav />

				<Switch>
					<main>
						<h1>Articles</h1>
						<Route path="/articles">
							<h2>Load articles</h2>
							{posts.map((post) => (
								<article>
									<p className="articleNr"> Article nr. {post.id}</p>
									<h3>{post.title}</h3>
									<p>{post.body}</p>
								</article>
							))}
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
