import imdb from "../image/imdb.png";
import noImg from "../image/no-image.jpg";
import noWall from "../image/no-wall-images.png";
import { useParams } from "react-router-dom";
import {
	AiFillLike,
	AiFillStar,
	AiFillDollarCircle,
	AiOutlineFieldTime,
} from "react-icons/ai";
import useFetch from "../useFetch";
import Credits from "../components/Credits";
import Review from "../components/Review";
import Movie from "../components/Movie";
import Series from "../components/Series";
import Error from "./ErrorPage";
import Loading from "../components/Loading";
import Media from "../components/Media";

const SingleMoviePage = () => {
	const { id, type } = useParams();

	const url = `https://api.themoviedb.org/3/${type}/${id}`;
	const { loading, movieData, error } = useFetch(url);
	const posterUrl = `https://image.tmdb.org/t/p/original/`;

	return (
		<>
			{error && <Error />}
			{loading && <Loading />}
			{!loading && !error && type === "movie" && (
				<main>
					<section className="media-info">
						<img
							className="media-intro"
							src={
								movieData.backdrop_path
									? `${posterUrl}${movieData.backdrop_path}`
									: noWall
							}
							alt={movieData.original_title}
						/>
						<div className="media-poster">
							<img
								src={
									movieData.poster_path
										? `${posterUrl}${movieData.poster_path}`
										: noImg
								}
								alt={movieData.original_title}
							/>
						</div>
						<div className="info">
							{movieData.original_title && (
								<h1 className="title">{movieData.original_title}</h1>
							)}
							<p>
								{movieData.release_date
									? movieData.release_date.split("-")[0]
									: "unknown"}
							</p>
							<p className="gneres">
								{movieData.genres
									? movieData.genres.map((item) => {
											const { name, id } = item;
											return <span key={id}>{name}</span>;
									  })
									: "unknown"}
							</p>
							<p>{movieData.original_language}</p>
							{movieData.popularity && (
								<p>
									{movieData.popularity} <AiFillLike />
								</p>
							)}
							{movieData.overview && (
								<p className="overview">{movieData.overview}</p>
							)}
							{movieData.vote_average && (
								<p>
									{movieData.vote_average} <AiFillStar />
								</p>
							)}
							{movieData.revenue > 0 && (
								<p>
									{movieData.revenue.toLocaleString()} <AiFillDollarCircle />
								</p>
							)}
							{movieData.runtime && (
								<p>
									{movieData.runtime} <AiOutlineFieldTime />
								</p>
							)}
							{movieData.tagline && (
								<p className="tagline">"{movieData.tagline}"</p>
							)}
							{movieData.imdb_id && (
								<button
									className="imdb-link"
									onClick={() =>
										window.open(
											`https://www.imdb.com/title/${movieData.imdb_id}`,
											"_blank"
										)
									}
								>
									{/* <Link to={`https://www.imdb.com/title/${imdb_id}`}> */}
									<img src={imdb} alt="imdb" />
									{/* </Link> */}
								</button>
							)}
						</div>
						<Media id={id} type={type} />
					</section>
					<section className="media-section">
						<h1 className="section-title">Credits</h1>
						<div className="media-wrapper">
							<Credits id={id} type={type} />
						</div>
					</section>
					<Review id={id} type={type} />
					<section className="media-section">
						<h1 className="section-title">Similar</h1>
						<div className="media-wrapper">
							{type === "tv" ? (
								<Series
									url={`https://api.themoviedb.org/3/tv/${id}/similar`}
									flag={4}
								/>
							) : (
								<Movie
									url={`https://api.themoviedb.org/3//movie/${id}/similar`}
									flag={4}
								/>
							)}
						</div>
					</section>
				</main>
			)}

			{!loading && !error && type === "tv" && (
				<main>
					<section className="media-info">
						<img
							className="media-intro"
							src={
								movieData.backdrop_path
									? `${posterUrl}${movieData.backdrop_path}`
									: noWall
							}
							alt={movieData.name}
						/>
						<div className="media-poster">
							<img
								src={
									movieData.poster_path
										? `${posterUrl}${movieData.poster_path}`
										: noImg
								}
								alt={movieData.name}
							/>
						</div>
						<div className="info">
							<h1 className="title">{movieData.title}</h1>
							{movieData.first_air_date !== null && (
								<p>{movieData.first_air_date.split("-")[0]}</p>
							)}
							{movieData.genres !== null && (
								<p className="gneres">
									{movieData.genres.map((item) => {
										const { name, id } = item;
										return <span key={id}>{name}</span>;
									})}
								</p>
							)}
							{movieData.original_language !== null && (
								<p>{movieData.original_language}</p>
							)}
							{movieData.popularity !== null && (
								<p>
									{movieData.popularity} <AiFillLike />
								</p>
							)}
							{movieData.overview !== null && (
								<p className="overview">{movieData.overview}</p>
							)}
							<p>
								{movieData.vote_average} <AiFillStar />
							</p>
							{movieData.status !== null && <p>{movieData.status}</p>}
							{movieData.episode_run_time !== null && (
								<p>
									{movieData.episode_run_time[0]} <AiOutlineFieldTime />
								</p>
							)}
							{movieData.number_of_episodes !== null && (
								<p>{movieData.number_of_episodes} - Episodes</p>
							)}
							{movieData.number_of_seasons !== null && (
								<p>{movieData.number_of_seasons} - Seasons</p>
							)}
							{movieData.networks.length > 1 && (
								<p>{movieData.networks[0].name}</p>
							)}
							{movieData.tagline !== null && (
								<p className="tagline">"{movieData.tagline}"</p>
							)}
							{movieData.imdb_id !== null && (
								<button
									className="imdb-link"
									onClick={() =>
										window.open(
											`https://www.imdb.com/title/${movieData.imdb_id}`,
											"_blank"
										)
									}
								>
									{/* <Link to={`https://www.imdb.com/title/${imdb_id}`}> */}
									<img src={imdb} alt="imdb" />
									{/* </Link> */}
								</button>
							)}
							<Media id={id} type={type} />
						</div>
					</section>
					<section className="media-section">
						<h1 className="section-title">Credits</h1>
						<div className="media-wrapper">
							<Credits id={id} type={type} />
						</div>
					</section>
					<Review id={id} type={type} />
					<section className="media-section">
						<h1 className="section-title">Similar</h1>
						<div className="media-wrapper">
							{type === "tv" ? (
								<Series
									url={`https://api.themoviedb.org/3/tv/${id}/similar`}
									flag={4}
								/>
							) : (
								<Movie
									url={`https://api.themoviedb.org/3//movie/${id}/similar`}
									flag={4}
								/>
							)}
						</div>
					</section>
				</main>
			)}
		</>
	);
};

export default SingleMoviePage;
