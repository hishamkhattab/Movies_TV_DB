import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../useFetch";
import imdb from "../image/imdb.png";
import { AiFillLike } from "react-icons/ai";
import PersonCredits from "../components/PersonCredit";
import Error from "../Pages/ErrorPage";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";
import noImg from "../image/no-image.jpg";

const CreditPage = () => {
	const { id } = useParams();

	const url = `https://api.themoviedb.org/3/person/${id}`;
	const personImageUrl = `https://api.themoviedb.org/3/person/${id}/images`; //.profiles
	const { loading, error, movieData } = useFetch(url);
	const [slide, setSlide] = useState(0);
	const {
		loading: imageLoading,
		error: imageError,
		movieData: imageData,
	} = useFetch(personImageUrl);
	const posterUrl = `https://image.tmdb.org/t/p/original/`;
	const [profileImage, setProfileImage] = useState(``);

	const moveUp = () => {
		if (slide === 1) {
			setSlide(0);
		} else {
			setSlide(1);
		}
	};

	useEffect(() => {
		setProfileImage(movieData.profile_path);
	}, [movieData]);

	const handleImage = (path) => {
		setProfileImage(path);
	};

	return (
		<>
			{error && <Error />}
			{loading && <Loading />}
			{!loading && !error && !imageLoading && (
				<main>
					<article className="credit-page">
						<h1 className="section-title">{movieData.name}</h1>
						<div className="credit-image">
							<section className="credit-profile-pic">
								<div className="media-poster">
									<img
										src={profileImage ? `${posterUrl}${profileImage}` : noImg}
										alt="actor-pic"
									/>
								</div>
							</section>
							<section className="credit-gallary">
								{imageData.profiles.length > 0 &&
									imageData.profiles.map((image, idx) => {
										const { file_path } = image;
										return (
											<div
												key={idx}
												onClick={() => {
													handleImage(file_path);
												}}
											>
												<img src={`${posterUrl}${file_path}`} alt="actor-pic" />
											</div>
										);
									})}
							</section>
						</div>
					</article>
					<article className="credit-bio">
						<h1 className="section-title">Biography</h1>
						<section className="control-display">
							<button className="btn" onClick={moveUp}>
								{"<"}
							</button>
							<button className="btn" onClick={moveUp}>
								{">"}
							</button>
						</section>
						{slide === 0 && (
							<section className="credit-info">
								<p>
									{movieData.also_known_as.length > 0 && (
										<span className="label">Known as </span>
									)}
									{movieData.also_known_as.length > 0 &&
										movieData.also_known_as.slice(0, 3).map((name, idx) => {
											return (
												<span className="name" key={idx}>
													{name}
												</span>
											);
										})}
									<br />
									{movieData.birthday !== null && (
										<>
											<span className="label">Born :</span>{" "}
											<span>{movieData.birthday}</span>
										</>
									)}
									{movieData.deathday !== null && (
										<span>{movieData.deathday}</span>
									)}
									{movieData.place_of_birth !== null && (
										<span className="label">in </span>
									)}
									{movieData.place_of_birth}
									<br />
									{movieData.popularity !== null && (
										<span>
											{movieData.popularity}
											<AiFillLike className="popular-logo" />
										</span>
									)}
									{movieData.also_known_as.length === 0 &&
										movieData.birthday === null &&
										movieData.popularity === null &&
										movieData.place_of_birth === null && (
											<section className="actor-bio">
												<p>There is no information available</p>
											</section>
										)}
								</p>
								{movieData.imdb_id !== null && (
									<button
										className="imdb-link"
										onClick={() =>
											window.open(
												`https://www.imdb.com/name/${movieData.imdb_id}`,
												"_blank"
											)
										}
									>
										{/* <Link to={`https://www.imdb.com/title/${imdb_id}`}> */}
										<img src={imdb} alt="imdb" />
										{/* </Link> */}
									</button>
								)}
							</section>
						)}
						{slide === 1 && movieData.biography && (
							<section className="actor-bio">{movieData.biography}</section>
						)}
						{slide === 1 && !movieData.biography && (
							<section className="actor-bio">
								<p>There is no information available</p>
							</section>
						)}
					</article>
					<PersonCredits id={id} />
				</main>
			)}
		</>
	);
};

export default CreditPage;
