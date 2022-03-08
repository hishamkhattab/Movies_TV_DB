import useFetch from "../useFetch";
import { AiOutlineYoutube } from "react-icons/ai";
const Media = ({ id, type }) => {
	const url = `https://api.themoviedb.org/3/${type}/${id}/videos`; ///tv/{tv_id}/videos

	const { loading, error, movieData } = useFetch(url);
	let counter = 0;

	return (
		<>
			{!loading &&
				movieData.results.length > 0 &&
				movieData.results.map((video) => {
					if (video.type === "Trailer" && counter === 0) {
						counter++;
						return (
							<button
								className="youtube-link btn"
								key={video.id}
								onClick={() =>
									window.open(
										`https://www.youtube.com/watch?v=${video.key}`,
										"_blank"
									)
								}
							>
								<AiOutlineYoutube />
							</button>
						);
					}
				})}
		</>
	);
};

export default Media;
