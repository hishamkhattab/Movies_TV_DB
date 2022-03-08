import React from "react";
import { useGlobalContext } from "../Context";
import { AiFillStar, AiFillLike } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../useFetch";
import Error from "./ErrorPage";
import Loading from "../components/Loading";
import noImg from "../image/no-image.jpg";
import { useEffect } from "react";

const SearchComponent = () => {
	const { searchTerm, getGender } = useGlobalContext();
	const navigate = useNavigate();

	useEffect(() => {
		if (searchTerm === "") {
			navigate("/", { replace: true });
		}
	}, [navigate, searchTerm]);

	const { loading, error, movieData } = useFetch(
		`https://api.themoviedb.org/3/search/multi`,
		searchTerm
	);
	const posterUrl = `https://image.tmdb.org/t/p/original/`;

	return (
		<section className="media-section">
			{error && <Error />}
			<h1 className="section-title">Search our Data-base</h1>
			<div className="media-wrapper">
				{loading && <Loading />}
				{!loading && !error && movieData.total_results === 0 && (
					<h3 className="search-msg">
						sorry... it looks like we can't find what you looking for
					</h3>
				)}
				{!loading &&
					!error &&
					movieData.results.map((result, idx) => {
						if (result.media_type === "movie") {
							const {
								id,
								title,
								vote_average,
								release_date,
								genre_ids,
								poster_path,
							} = result;
							return (
								<main key={idx} className="card">
									<div className="image">
										<img
											src={poster_path ? `${posterUrl}${poster_path}` : noImg}
											alt={title}
										/>
									</div>
									<div className="details">
										<div className="center">
											<h1>{title}</h1>
											{vote_average > 0 && (
												<p className="vote">
													{vote_average.toFixed(1)}
													<AiFillStar className="star-logo" />
												</p>
											)}
											<ul>
												{genre_ids &&
													genre_ids.slice(0, 2).map((item, idx) => {
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
						} else if (result.media_type === "tv") {
							const {
								id,
								name,
								vote_average,
								first_air_date = "N/A",
								genre_ids,
								poster_path,
								media_type,
							} = result;
							return (
								<main key={idx} className="card">
									<div className="image">
										<img
											src={poster_path ? `${posterUrl}${poster_path}` : noImg}
											alt={name}
										/>
									</div>
									<div className="details">
										<div className="center">
											<h1>{name}</h1>
											{vote_average > 0 && (
												<p className="vote">
													{vote_average.toFixed(1)}
													<AiFillStar className="star-logo" />
												</p>
											)}
											<ul>
												{genre_ids.slice(0, 2).map((item, idx) => {
													return <li key={idx}>{getGender(item)}</li>;
												})}
											</ul>
											<div className="date">
												<span>{first_air_date.split("-")[0]} -</span>
												<span className="danger">
													{" "}
													{first_air_date.split("-")[1]}
												</span>
												<span> - {first_air_date.split("-")[2]}</span>
											</div>
											<p>{media_type}</p>
											<button className="btn btn-details">
												<Link to={`/tv/${id}`}>See more details</Link>
											</button>
										</div>
									</div>
								</main>
							);
						} else if (result.media_type === "person") {
							const {
								known_for_department,
								profile_path,
								name,
								id,
								popularity,
							} = result;
							return (
								<main key={idx} className="card">
									<div className="image">
										<img
											src={profile_path ? `${posterUrl}${profile_path}` : noImg}
											alt={name}
										/>
									</div>
									<div className="details">
										<div className="center">
											<h1>{name}</h1>
											{popularity > 0 && (
												<p className="vote">
													{popularity.toFixed(2)}
													<AiFillLike className="star-logo" />
												</p>
											)}
											<p>{known_for_department}</p>
											<button className="btn btn-details">
												<Link to={`/credits/${id}`}>See more details</Link>
											</button>
										</div>
									</div>
								</main>
							);
						}
					})}
			</div>
		</section>
	);
};

export default SearchComponent;
