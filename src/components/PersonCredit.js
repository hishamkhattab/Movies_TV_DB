import useFetch from "../useFetch";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import Error from "../Pages/ErrorPage";
import Loading from "./Loading";
import { useGlobalContext } from "../Context";
const PersonCreddits = ({ id }) => {
	const { getGender } = useGlobalContext();
	const url = `https://api.themoviedb.org/3/person/${id}/movie_credits`;
	const { loading, error, movieData } = useFetch(url);
	const posterUrl = `https://image.tmdb.org/t/p/original/`;
	let personCredit = [];

	if (!loading && movieData) {
		if (movieData.cast.length > 20) {
			personCredit = movieData.cast.slice(0, 20);
		} else {
			personCredit = movieData.cast;
		}
	}

	return (
		<>
			{error && <Error />}
			{loading && <Loading />}
			{!loading && !error && (
				<section className="media-section">
					<h1 className="section-title">Known For</h1>
					<div className="media-wrapper">
						{personCredit
							.filter((movie) => movie.vote_average > 3)
							.map((movie) => {
								const {
									poster_path,
									title,
									release_date,
									vote_average,
									genre_ids,
									id,
								} = movie;
								return (
									<main key={id} className="card">
										<div className="image">
											<img src={`${posterUrl}${poster_path}`} alt={title} />
										</div>
										<div className="details">
											<div className="center">
												<h1>{title}</h1>
												<p className="vote">
													{vote_average}
													<AiFillStar className="star-logo" />
												</p>
												<ul>
													{genre_ids.slice(0, 2).map((item, idx) => {
														return <li key={idx}>{getGender(item)}</li>;
													})}
												</ul>
												<div className="date">
													<span>{release_date.split("-")[0]} -</span>
													<span className="danger">
														{" "}
														{release_date.split("-")[1]}
													</span>
													<span> - {release_date.split("-")[2]}</span>
												</div>
												<button className="btn btn-details">
													<Link to={`/movie/${id}`}>See more details</Link>
												</button>
											</div>
										</div>
									</main>
								);
							})}
					</div>
				</section>
			)}
		</>
	);
};

export default PersonCreddits;

/*
adult: false
backdrop_path: "/tuiupUeJrNQkmO6LADHOSjbGJ6E.jpg"
character: "Griet"
credit_id: "52fe43a1c3a36847f80632bd"
genre_ids: (2) [18, 10749]
id: 3635
order: 0
original_language: "en"
original_title: "Girl with a Pearl Earring"
overview: "This film, adapted from a work of fiction by author Tracy Chevalier, tells a story about the events surrounding the creation of the painting \"Girl With A Pearl Earring\" by 17th century Dutch master Johannes Vermeer. A young peasant maid working in the house of painter Johannes Vermeer becomes his talented assistant and the model for one of his most famous works."
popularity: 20.413
release_date: "2003-12-12"
video: false
vote_average: 6.6
*/
