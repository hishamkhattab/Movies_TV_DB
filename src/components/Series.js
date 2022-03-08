import useFetch from "../useFetch";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import Error from "../Pages/ErrorPage";
import Loading from "./Loading";
import { useGlobalContext } from "../Context";
import noImg from "../image/no-image.jpg";
import { useEffect } from "react";

const Series = ({ url, flag = 0, pageNumber, query = 0 }) => {
	const { getGender, setNumberOfPages } = useGlobalContext();
	const { loading, movieData, error } = useFetch(url, query, pageNumber);
	const posterUrl = `https://image.tmdb.org/t/p/original/`;
	let fetchData = [];

	useEffect(() => {
		setNumberOfPages(movieData.total_pages);
	}, [movieData]);

	if (!loading && movieData) {
		if (flag !== 0) {
			fetchData = movieData.results.slice(0, flag);
		} else {
			fetchData = movieData.results;
		}
	}

	return (
		<>
			{error && <Error />}
			{!error && loading && <Loading />}
			{!loading &&
				!error &&
				fetchData.map((movie) => {
					const {
						id,
						name,
						vote_average,
						first_air_date,
						genre_ids,
						poster_path,
					} = movie;
					return (
						<main key={id} className="card">
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
									<button className="btn btn-details">
										<Link to={`/tv/${id}`}>See more details</Link>
									</button>
								</div>
							</div>
						</main>
					);
				})}
		</>
	);
};

export default Series;
