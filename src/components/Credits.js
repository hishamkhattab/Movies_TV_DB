import { Link } from "react-router-dom";
import useFetch from "../useFetch";
import Error from "../Pages/ErrorPage";
import Loading from "./Loading";
import noImg from "../image/no-image.jpg";
const Credits = ({ id, type }) => {
	///movie/{movie_id}/credits
	const url = `https://api.themoviedb.org/3/${type}/${id}/credits`;
	const { loading, error, movieData } = useFetch(url);
	const posterUrl = `https://image.tmdb.org/t/p/original/`;
	let counter = 0;
	return (
		<>
			{error && <Error />}
			{loading && <Loading />}
			{!loading && !error && (
				<>
					<>
						{movieData.cast.slice(0, 4).map((item) => {
							const { character, name, profile_path, id } = item;
							return (
								<article key={id} className="actor">
									<Link to={`/credits/${id}`}>
										<div className="actor-img">
											<img
												src={
													profile_path ? `${posterUrl}${profile_path}` : noImg
												}
												alt="actor"
											/>
										</div>
										<p className="name">{name}</p>
										<p className="danger">AS</p>
										<p className="char-name">{character}</p>
									</Link>
								</article>
							);
						})}
					</>
					<>
						{movieData.crew.map((director) => {
							if (director.job === "Director" && counter === 0) {
								counter = 1;
								return (
									<article className="actor" key={director.id}>
										<Link to={`/credits/${director.id}`}>
											<div className="actor-img">
												<img
													src={
														director.profile_path
															? `${posterUrl}${director.profile_path}`
															: noImg
													}
													alt="director"
												/>
											</div>
											<p className="name">{director.name}</p>
											<p className="danger">AS</p>
											<p className="char-name">{director.job}</p>
										</Link>
									</article>
								);
							}
						})}
					</>
				</>
			)}
		</>
	);
};
export default Credits;
