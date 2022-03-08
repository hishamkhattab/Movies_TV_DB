import logo from "../image/The_Movie_Database.svg";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";
import { useGlobalContext } from "../Context";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
	const [navbar, setNavbar] = useState(false);
	const { sidebarHandle, setSearchTerm, searchTerm } = useGlobalContext();
	const navigate = useNavigate();
	const searchValue = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const searchMovie = () => {
		navigate("/search", { replace: true });
		setSearchTerm(searchValue.current.value);
	};

	const changeNavbar = () => {
		if (window.scrollY > 100) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	window.addEventListener("scroll", changeNavbar);

	return (
		<nav className={navbar ? "navbar active" : "navbar"}>
			<div className="wrapper">
				<div className="logo">
					<Link to="/">
						<img src={logo} alt="movie data-base" />
					</Link>
				</div>
				<div className="navbar--toggle">
					<AiOutlineBars onClick={sidebarHandle} />
					{/*should be X when opened*/}
				</div>
				<nav className="navbar--links">
					<ul>
						<li>
							<Link to="/upcoming">upcoming</Link>
						</li>
						<li>
							<Link to="/popular">popular</Link>
						</li>
						<li>
							<Link to="/top-rate">top rated</Link>
						</li>
						<li>
							<Link to="/genre">Genre</Link>
						</li>
					</ul>
				</nav>
				<nav className="navbar--search">
					<div>
						<form onSubmit={handleSubmit}>
							<input
								type="text"
								placeholder="Search your favorite movies.."
								ref={searchValue}
								onChange={searchMovie}
								value={searchTerm}
							/>
							<FaSearch className="search-icon" />
						</form>
					</div>
				</nav>
			</div>
		</nav>
	);
};

export default Navbar;
