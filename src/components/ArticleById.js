import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL } from "../App";

const ArticleById = () => {
	const [post, setPost] = useState(1);
	const [articleId, setArticleId] = useState(1);

	useEffect(() => {
		axios.get(`${baseURL}/${articleId}`).then((res) => {
			setPost(res.data);
			console.log(post);
		});
	}, [articleId]);

	return (
		<section className="articles">
			<label htmlFor="Number">Enter number of article you want to read:</label>
			<input
				type="number"
				name="Number"
				min="1"
				max="100"
				onChange={(e) => setArticleId(e.target.value)}
				placeholder={1}
			/>
			<h2>Choose article by ID</h2>
			<article>
				<p className="articleNr"> Article nr. {post.id}</p>
				<h3>{post.title}</h3>
				<p>{post.body}</p>
			</article>
		</section>
	);
};

export default ArticleById;
