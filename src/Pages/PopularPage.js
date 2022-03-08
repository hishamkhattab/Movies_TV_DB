import Movie from "../components/Movie";
import Pagination from "../components/Pagination";
import Series from "../components/Series";
import { useGlobalContext } from "../Context";

const PopularPage = () => {
	const { type, handleClick, pageNumber, numberOfPages } = useGlobalContext();

	return (
		<main className="media-section">
			<h1 className="section-title">{`Popular ${type}s`}</h1>
			<button onClick={(e) => handleClick(e)} className="type-select btn">
				{type}
			</button>
			<div className="media-wrapper">
				{type === "movie" && (
					<Movie
						url="https://api.themoviedb.org/3/trending/movie/day"
						pageNumber={pageNumber}
					/>
				)}
				{type === "tv-show" && (
					<Series
						url="https://api.themoviedb.org/3/trending/tv/day"
						pageNumber={pageNumber}
					/>
				)}
			</div>
			<Pagination numberOfPages={numberOfPages} pageNumber={pageNumber} />
		</main>
	);
};

export default PopularPage;
