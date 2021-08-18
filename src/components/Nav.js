import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<nav>
			<Link to="/articles">Articles</Link>
			<Link to="/byValue">Article By Id</Link>
			<Link to="/new">Post New Article</Link>
		</nav>
	);
};

export default Nav;
