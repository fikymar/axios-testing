import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../App";
import { Link } from "react-router-dom";

const Articles = () => {
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
		<>
			<h2>Load articles</h2>
			{posts
				.filter((post) => post.id < showArticles + 4 && post.id >= showArticles)
				.map((post) => (
					<article key={post.id}>
						<p className="articleNr"> Article nr. {post.id}</p>
						<h3>{post.title.toUpperCase()}</h3>
						<p>{post.body}</p>
						{/* <Link to={`/${post.id}`}>See detail</Link> */}
					</article>
				))}
			<button onClick={handleClick}>Next 4 articles</button>
		</>
	);
};

export default Articles;
