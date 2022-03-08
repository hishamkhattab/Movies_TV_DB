import { useEffect } from "react";
import Chip from "../components/Chip";
import Pagination from "../components/Pagination";
import { useGlobalContext } from "../Context";

const GenrePage = () => {
	const { type, handleClick, setGenre, numberOfPages, pageNumber } =
		useGlobalContext();

	useEffect(() => {
		setGenre((prevGender) => {
			return [];
		});
	}, [setGenre, type]);

	return (
		<main className="media-section">
			<h1 className="section-title">{`Genre - ${type}s`}</h1>
			<button onClick={(e) => handleClick(e)} className="type-select btn">
				{type}
			</button>
			<Chip type={type} />

			<Pagination numberOfPages={numberOfPages} pageNumber={pageNumber} />
		</main>
	);
};

export default GenrePage;
