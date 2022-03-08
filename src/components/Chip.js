import { useEffect } from "react";
import { useGlobalContext } from "../Context";
import useFetch from "../useFetch";
import Movie from "./Movie";
import Series from "./Series";

const Chip = ({ type }) => {
	const { pageNumber, handleGenre, genre } = useGlobalContext();

	let media = type === "movie" ? "movie" : "tv";
	const url = `https://api.themoviedb.org/3/genre/${media}/list`;
	const { loading, error, movieData } = useFetch(url);
	const spans = document.querySelectorAll(".genre");

	console.log(error);

	useEffect(() => {
		spans.forEach((span) => {
			span.classList.remove("active");

			if (genre.includes(span.attributes["data-genre"].value)) {
				span.classList.add("active");
			}
		});
	}, [genre, spans]);

	return (
		<>
			<div className="genre-container" onClick={(e) => handleGenre(e)}>
				{!loading &&
					!error &&
					movieData.genres.map((genre) => {
						const { id, name } = genre;
						return (
							<span className="genre" data-genre={id} key={id}>
								{name}
								<label data-genre={id} className="close">
									{"x"}
								</label>
							</span>
						);
					})}
			</div>
			<div className="media-wrapper">
				{type === "movie" && (
					<Movie
						url="https://api.themoviedb.org/3/discover/movie"
						query={`sort_by=popularity.desc&&with_genres=${genre}`}
						pageNumber={pageNumber}
					/>
				)}
				{type === "tv-show" && (
					<Series
						url="https://api.themoviedb.org/3/discover/tv"
						q
						query={`sort_by=popularity.desc&&with_genres=${genre}`}
						pageNumber={pageNumber}
					/>
				)}
			</div>
		</>
	);
};

export default Chip;
