export const apiKey = process.env.REACT_APP_MOVIE_API_KEY;

export const posterURL = `https://image.tmdb.org/t/p/original/`;

export const mediaCredit = (type, id) =>
	`${type}/${id}/credits?api_key=${apiKey}&language=en-US`;

export const getVideo = (type, id) => {
	return `/${type}/${id}/videos?api_key=${apiKey}&language=en-US`;
};

export const mediaSimilar = (type, id) => {
	return `https://api.themoviedb.org/3/${type}/${id}/similar?api_key=${apiKey}&language=en-US`;
};
export const getPersonCredit = (id) => {
	return `https://api.themoviedb.org/3/person/${id}/movie_credits`;
};

export const getGender = (genreID) => {
	// eslint-disable-next-line default-case
	switch (genreID) {
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

export const baseURL = `https://api.themoviedb.org/3`;

export const getBaseURL = (url, pageNumber = 1, query = "") => {
	const key = process.env.REACT_APP_MOVIE_API_KEY;

	if (query) {
		return `${url}?api_key=${key}&language=en-US&query=${query}&page=${pageNumber}`;
	}
	return `${url}?api_key=${key}&language=en-US&page=${pageNumber}`;
};

export const popularMedia = (type) => {
	return `https://api.themoviedb.org/3/trending/${type}/day`;
};

export const searchMedia = (searchTerm) => {
	return `https://api.themoviedb.org/3/search/multi/${searchTerm}`;
};

export const getSingleMediaInfo = (type, id) => {
	return `https://api.themoviedb.org/3/${type}/${id}`;
};

export const topRatedMedia = (type) => {
	return `https://api.themoviedb.org/3/${type}/top_rated`;
};

export const getActorCredit = (person_id) => {
	return `/person/${person_id}?api_key=${apiKey}&language=en-US`;
};

export const knowFor = (person_id) => {
	return `/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&page=1&with_cast=${person_id}&`;
};
export const upcomingMovies = "https://api.themoviedb.org/3/movie/upcoming";

export const nowPlayingMovies =
	"https://api.themoviedb.org/3/movie/now_playing";

export const nowPlayingSeries = "https://api.themoviedb.org/3/tv/on_the_air";

const requests = {
	trending: `/trending/all/week?api_key=${apiKey}&language=en-US`,
	netflixOriginals: `/discover/tv?api_key=${apiKey}&with_networks=213`,
	topRated: `/movie/top_rated?api_key=${apiKey}&language=en-US`,
	actionMovies: `/discover/movie?api_key=${apiKey}&with_genres=28`,
	comdyMovies: `/discover/movie?api_key=${apiKey}&with_genres=35`,
	animatedMovies: `/discover/movie?api_key=${apiKey}&with_genres=16`,
	horrorMovies: `/discover/movie?api_key=${apiKey}&with_genres=27`,
	thrillerMovies: `/discover/movie?api_key=${apiKey}&with_genres=53`,
	onAirSeries: `/tv/on_the_air?api_key=${apiKey}&language=en-US`,
	trendingEgypt: `/discover/movie?api_key=${apiKey}&language=en-US&region=eg&sort_by=popularity.desc&page=1&primary_release_year=2022`,
	querySearch: `/search/multi?api_key=${apiKey}&language=en-US`, //&query=tom
};

export default requests;
