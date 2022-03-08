import React, { useContext, useState } from "react";

const AppContext = React.createContext("");

const AppProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const [pageNumber, setPageNumber] = useState(1);
	const [numberOfPages, setNumberOfPages] = useState(0);
	const [type, setType] = useState("movie");
	const [genre, setGenre] = useState([]);

	const getGender = (genre) => {
		// eslint-disable-next-line default-case
		switch (genre) {
			case 28:
				return "action";
			case 16:
				return "animated";
			case 99:
				return "documentary";
			case 18:
				return "drama";
			case 10751:
				return "family";
			case 14:
				return "fantasy";
			case 36:
				return "history";
			case 35:
				return "comedy";
			case 10752:
				return "war";
			case 80:
				return "crime";
			case 10402:
				return "music";
			case 9648:
				return "mystery";
			case 10749:
				return "romance";
			case 878:
				return "sci fi";
			case 27:
				return "horror";
			case 10770:
				return "TV movie";
			case 53:
				return "thriller";
			case 37:
				return "western";
			case 12:
				return "adventure";
		}
	};

	const handleClick = (e) => {
		if (type === "movie") {
			setPageNumber("1");
			setType("tv-show");
			e.target.classList.add("tv");
		} else {
			setPageNumber("1");
			setType("movie");
			e.target.classList.remove("tv");
		}
	};

	const handleGenre = (e) => {
		if (e.target.tagName === "SPAN") {
			setPageNumber("1");
			const genre = e.target.attributes["data-genre"].value;
			setGenre((pervGenre) => {
				return [...pervGenre, genre];
			});
		} else if (e.target.tagName === "LABEL") {
			setPageNumber("1");
			const genre = e.target.attributes["data-genre"].value;
			setGenre((pervGenre) => {
				return pervGenre.filter((g) => g !== genre);
			});
		}
	};
	const sidebarHandle = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	return (
		<AppContext.Provider
			value={{
				isSidebarOpen,
				sidebarHandle,
				type,
				handleClick,
				setSearchTerm,
				searchTerm,
				getGender,
				pageNumber,
				setPageNumber,
				handleGenre,
				genre,
				setGenre,
				setNumberOfPages,
				numberOfPages,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
