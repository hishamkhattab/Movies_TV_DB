import Movie from "../components/Movie";
import Pagination from "../components/Pagination";
import { useGlobalContext } from "../Context";

const Upcoming = () => {
	const url = "https://api.themoviedb.org/3/movie/upcoming";
	const { pageNumber, numberOfPages } = useGlobalContext();
	return (
		<main className="media-section">
			<h1 className="section-title">Upcomig Movies</h1>
			<div className="media-wrapper">
				<Movie url={url} pageNumber={pageNumber} />
			</div>
			<Pagination numberOfPages={numberOfPages} pageNumber={pageNumber} />
		</main>
	);
};

export default Upcoming;
