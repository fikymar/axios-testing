import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import NewArticle from "./components/NewArticle";
import "./scss/App.css";
import Nav from "./components/Nav";
import ArticleById from "./components/ArticleById";
import ArticleByInputValue from "./components/ArticleByInputValue";
import Articles from "./components/articles";

export const baseURL = "https://jsonplaceholder.typicode.com/posts";

function App() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		axios.get(baseURL).then((res) => {
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
							<Articles posts={posts} />
						</Route>
						<Route path="/articles"></Route>
						<Route path="/byValue">
							<ArticleByInputValue />
						</Route>
						<Route path="/new">
							<NewArticle />
						</Route>
						{posts.map((post) => (
							<Route path={`/${post.id}`} key={post.id}>
								<ArticleById post={post} />
							</Route>
						))}
					</main>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
