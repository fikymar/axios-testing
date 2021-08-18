const ArticleById = ({ post }) => {
	return (
		<section className="articles">
			<article>
				<p className="articleNr"> Article nr. {post.id}</p>
				<h3>{post.title}</h3>
				<p>{post.body}</p>
			</article>
		</section>
	);
};

export default ArticleById;
