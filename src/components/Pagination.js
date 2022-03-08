import { useEffect, useMemo } from "react";
import { useGlobalContext } from "../Context";
import usePagination from "../usePagination";
const DOTS = "...";

const Pagination = ({ numberOfPages, pageNumber }) => {
	const { setPageNumber } = useGlobalContext();
	const spans = document.querySelectorAll(".count");
	const pageRange = usePagination(numberOfPages, 1, 1);
	const handleClick = (e) => {
		if (e.target.tagName === "SPAN") {
			spans.forEach((span) => {
				span.classList.remove("active");
				// if (pageNumber === span.attributes['data-count'].value) {
				//     span.classList.add('active');
				// };
			});
			// e.target.classList.add('active');
			setPageNumber(e.target.attributes["data-count"].value);
		}
	};

	useEffect(() => {
		spans.forEach((span) => {
			span.classList.remove("active");

			if (span.attributes["data-count"].value === pageNumber) {
				span.classList.add("active");
			}
		});
	}, [pageNumber, spans]);

	return (
		<>
			{pageRange && (
				<div className="pagination" onClick={handleClick}>
					{pageRange.map((number, idx) => {
						if (number === 1) {
							return (
								<span className="count active" data-count={number} key={idx}>
									{number}
								</span>
							);
						} else if (number === DOTS) {
							return (
								<span className="count" data-count={number} key={idx}>
									&#8230;
								</span>
							);
						}
						return (
							<span className="count" data-count={number} key={idx}>
								{number}
							</span>
						);
					})}
				</div>
			)}
		</>
	);
};

export default Pagination;
