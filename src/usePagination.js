import { useMemo } from "react";
const DOTS = "...";

const usePagination = (totalPages, sibilingCount = 1, currentPage) => {
	const range = (start, end) => {
		let length = end - start + 1;
		/**
		 * Create an array
		 */
		return Array.from({ length }, (_, idx) => idx + start);
	};

	//useMemo, so that function won't run unless any of the dep. changes
	const paginationRange = useMemo(() => {
		// const totalPageNumbers = sibilingCount + 5;

		/**
		 * case #1 :
		 * If the number of pages is less thant 10
		 * [1 ... 10]
		 */
		if (totalPages <= 10) {
			return range(1, totalPages);
		}

		const leftSibilingIndex = Math.max(currentPage - sibilingCount, 1);
		const rightSibilingIndex = Math.min(
			currentPage + sibilingCount,
			totalPages
		);

		/**
		 * showing dots only if there is more than one page
		 */

		const showLeftDots = leftSibilingIndex > 2;
		const showRightDots = rightSibilingIndex < totalPages - 2;

		const firstPageIndex = 1;
		const lastPageIndex = totalPages;

		/**
		 * Case # 2
		 * no left dots to show , only right
		 */

		if (!showLeftDots && showRightDots) {
			let leftItemCount = 3 + 2 * sibilingCount;
			let leftRange = range(1, leftItemCount);

			return [...leftRange, DOTS, totalPages];
		}

		/**
		 * Case # 3
		 * no right dots to show , only left
		 */

		if (showLeftDots && !showRightDots) {
			let rightItemCount = 3 + 2 * sibilingCount;
			let rightRange = range(totalPages - rightItemCount + 1, totalPages);

			return [firstPageIndex, DOTS, ...rightRange];
		}

		/**
		 * Case # 4
		 * both left & right dots are shown
		 */
		if (showLeftDots && showRightDots) {
			let middleRange = range(leftSibilingIndex, leftSibilingIndex + 5);
			return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
		}
	}, [totalPages, sibilingCount, currentPage]);

	return paginationRange;
};

export { usePagination as default, DOTS };
