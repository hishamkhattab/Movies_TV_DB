import { useEffect } from "react";
import { useGlobalContext } from "../Context";

const Pagination = ({ numberOfPages }) => {
	const { setPageNumber, pageNumber } = useGlobalContext();
	const spans = document.querySelectorAll(".count");

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

	console.log(numberOfPages);

	useEffect(() => {
		spans.forEach((span) => {
			span.classList.remove("active");

			if (span.attributes["data-count"].value === pageNumber) {
				span.classList.add("active");
			}
		});
	}, [pageNumber]);

	return (
		<div className="pagination" onClick={handleClick}>
			<span className="count active" data-count="1">
				1
			</span>
			<span className="count" data-count="2">
				2
			</span>
			<span className="count" data-count="3">
				3
			</span>
			<span className="count" data-count="4">
				4
			</span>
			<span className="count" data-count="5">
				5
			</span>
			<span className="count" data-count="6">
				6
			</span>
			<span className="count" data-count="7">
				7
			</span>
			<span className="count" data-count="8">
				8
			</span>
			<span className="count" data-count="9">
				9
			</span>
			<span className="count" data-count="10">
				10
			</span>
		</div>
	);
};

export default Pagination;
