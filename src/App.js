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
	const [post, setPost] = useState(1);

	// will be change
	let id = 5;

	useEffect(() => {
		axios.get(`${baseURL}/${id}`).then((res) => {
			setPost(res.data);
			console.log(post);
		});
	}, [id]);

	return (
		<div className="App">
			<Router>
				<Nav />
				<Switch>
					<main>
						<h1>Articles</h1>
						<Route path="/articles">
							<Articles id />
						</Route>
						<Route path="/articles"></Route>
						<Route path="/byValue">
							<ArticleByInputValue />
						</Route>
						<Route path="/new">
							<NewArticle />
						</Route>
						<Route path={`/${id}`}>
							<ArticleById post={post} />
						</Route>
					</main>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
