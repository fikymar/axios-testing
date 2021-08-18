import axios from "axios";
import { useState } from "react";
import { baseURL } from "../App";

const NewArticle = () => {
	const [newArticle, setNewArticle] = useState(1);
	const [title, setTitle] = useState("Your title");
	const [newArticleBody, setNewArticleBody] = useState("Your text");

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

	function handleChange(e) {
		setTitle(e.target.value);
	}

	function handleChangeBody(e) {
		setNewArticleBody(e.target.value);
	}

	return (
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
				<h3>{newArticle.title}</h3>
				<p>{newArticle.body}</p>
			</article>
		</section>
	);
};

export default NewArticle;
