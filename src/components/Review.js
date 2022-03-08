import useFetch from "../useFetch";
import img from "../image/jakob-owens-CiUR8zISX60-unsplash.jpg";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import Error from "../Pages/ErrorPage";
import Loading from "./Loading";
import { useState } from "react";
const Review = ({ id, type }) => {
	const url = `https://api.themoviedb.org/3//${type}/${id}/reviews`;
	const { loading, error, movieData } = useFetch(url);
	const posterUrl = `https://image.tmdb.org/t/p/original/`;
	const [isActive, setIsActive] = useState(false);

	return (
		<>
			{error && <Error />}
			{loading && <Loading />}
			{!loading && !error && movieData.results.length > 0 && (
				<section className="media-section">
					<button
						className="btn review-btn"
						onClick={() => setIsActive(!isActive)}
					>
						{isActive ? "Hide others review" : "show others review"}
						<span>
							{isActive ? <FaAngleDoubleUp /> : <FaAngleDoubleDown />}
						</span>
					</button>
					{isActive && (
						<>
							<h1 className="section-title">Review</h1>
							<div className="review-wrapper">
								{movieData.results.map((review, idx) => {
									const { author, author_details, content, updated_at, url } =
										review;
									let urlImg = "";
									if (author_details.avatar_path !== null) {
										if (author_details.avatar_path.slice(1).charAt(0) === "h") {
											urlImg = author_details.avatar_path.slice(1);
										} else if (author_details.avatar_path.slice(1)) {
											urlImg = `${posterUrl}${author_details.avatar_path.slice(
												1
											)}`;
										}
									} else {
										urlImg = img;
									}
									return (
										<article key={idx} className="reviews">
											<div className="reviewer-info">
												<div className="reviewer-img">
													<img src={urlImg} alt="avatar" />
												</div>
												<div className="reviewer-headline">
													<Link to={url}>{`A review by ${author}`}</Link>
													<span className="review-rate">
														{author_details.rating === null
															? "N/A"
															: author_details.rating}
														<AiFillStar className="review-icon" />
													</span>
													<p>
														Written by
														<span className="fw-600"> {author}</span> on{" "}
														<span>{updated_at.split("T")[0]}</span>
													</p>
												</div>
											</div>
											<div className="review-content">
												<p>{content}</p>
											</div>
										</article>
									);
								})}
								<article className="write-review">
									<h1 className="section-title">Share Your Review</h1>
									<form className="form-wrapper">
										<input type="text" required placeholder="name" />
										<input type="text" placeholder="rate" />
										<textarea placeholder="your review" required></textarea>
										<input type="file" id="myFile" name="filename"></input>
										<button className="btn">Share your review</button>
									</form>
								</article>
							</div>
						</>
					)}
				</section>
			)}
		</>
	);
};

export default Review;
