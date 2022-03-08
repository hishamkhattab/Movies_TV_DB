import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { useGlobalContext } from "../Context";
const Sidebar = () => {
	const { sidebarHandle } = useGlobalContext();

	return (
		<main className="sidebar">
			<IoMdClose className="close--tag" onClick={sidebarHandle} />
			<div className="sidebar-wrapper">
				<nav>
					<ul className="sidebar--links">
						<li>
							<Link to="/upcoming" onClick={sidebarHandle}>
								upcoming
							</Link>
						</li>
						<li>
							<Link to="/popular" onClick={sidebarHandle}>
								popular
							</Link>
						</li>
						<li>
							<Link to="/top-rate" onClick={sidebarHandle}>
								top rated
							</Link>
						</li>
						<li>
							<Link to="/genre" onClick={sidebarHandle}>
								Genre
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</main>
	);
};

export default Sidebar;
