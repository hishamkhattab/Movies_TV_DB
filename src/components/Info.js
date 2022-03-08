import { AiFillLike } from "react-icons/ai";
import img from "../image/samuel-regan-asante-wMkaMXTJjlQ-unsplash.jpg";
import useFetch from "../useFetch";
import { Link } from "react-router-dom";
import Loading from "./Loading";
const Info = ({ url }) => {
	const { movieData, loading, error } = useFetch(url);
	const posterUrl = `https://image.tmdb.org/t/p/original/`;

	return (
		<>
			{!url && (
				<section className="quote-section">
					<div className="quote-text">
						<p>
							“Movies touch our hearts and awaken our vision, and change the way
							we see things. They take us to other places, they open doors and
							minds. Movies are the memories of our life time, we need to keep
							them alive.”
						</p>
						<span>Martin Scorsese</span>
					</div>
					<div className="quote-img">
						<img src={img} alt="we love cinema" />
					</div>
				</section>
			)}
			{loading && <Loading />}
			{!loading && !error && (
				<section className="popular-section">
					<h1 className="section-title">Star of the day</h1>
					<div className="popular-wrapper">
						<article className="card popular-card">
							<div className="image">
								<img
									src={`${posterUrl}${movieData.results[0].profile_path}`}
									alt={movieData.results[0].name}
								/>
							</div>
							<div className="details">
								<div className="center">
									<h1>{movieData.results[0].name}</h1>
									{movieData.results[0].popularity > 0 && (
										<p className="vote">
											{movieData.results[0].popularity.toFixed(2)}
											<AiFillLike className="star-logo" />
										</p>
									)}
									<p>{movieData.results[0].known_for_department}</p>
									<button className="btn btn-details">
										<Link to={`/credits/${movieData.results[0].id}`}>
											See more details
										</Link>
									</button>
								</div>
							</div>
						</article>
						<article className="popular-info">
							{movieData.results[0].known_for.map((movie) => {
								const { title, id, poster_path } = movie;
								return (
									<Link to={`/movie/${id}`} key={id}>
										<div className="poster-wrapper">
											<img src={`${posterUrl}${poster_path}`} alt={title} />
											<span>{title}</span>
										</div>
									</Link>
								);
							})}
						</article>
					</div>
				</section>
			)}
		</>
	);
};

export default Info;
