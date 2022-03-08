import { FaHeart } from "react-icons/fa";
import logo from "../image/The_Movie_Database.svg";
const Footer = () => {
	return (
		<footer className="footer">
			<div className="wrapper">
				<div className="footer-text">
					<span>We</span>
					<FaHeart className="footer-logo" />
					<span>Movies</span>
				</div>
				<div
					className="footer-btn btn"
					onClick={() => window.open(`hhttps://www.themoviedb.org`, "_blank")}
				>
					<img src={logo} alt="movie data-base" />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
