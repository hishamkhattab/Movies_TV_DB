import { useReducer, useEffect, useRef } from "react";

const initialState = {
	loading: true,
	error: false,
	errorMsg: "",
	movieData: {},
};

const reducer = (state, action) => {
	switch (action.type) {
		case "GET_POPULAR_MOVIES":
			return { loading: false, error: false, movieData: action.payload };
		case "LOADING":
			return { ...state, loading: true };
		case "ERROR":
			return {
				...state,
				loading: false,
				error: true,
				errorMsg: action.payload,
			};
		default:
			return state;
	}
};

const useFetch = (url, query, pageNumber = 1) => {
	const ApiKey = process.env.REACT_APP_MOVIE_API_KEY;
	let baseUrl = ``;
	if (query) {
		baseUrl = `${url}?api_key=${ApiKey}&language=en-US&query=${query}&page=${pageNumber}`;
	} else {
		baseUrl = `${url}?api_key=${ApiKey}&language=en-US&page=${pageNumber}`;
	}

	const [state, dispatch] = useReducer(reducer, initialState);
	// flag that refer to if the component is mounted or not
	//using (useRef) cause it save the value through the diffrent renders
	let isMounted = useRef(true);

	useEffect(() => {
		dispatch({ type: "LOADING" });

		//flag to indicate that the component is mounted
		isMounted.current = true;
		fetch(baseUrl)
			.then((res) => {
				if (!res.ok) {
					throw Error("Couldn't fetch data");
				}
				return res.json();
			})
			.then((data) => {
				if (isMounted.current) {
					dispatch({ type: "GET_POPULAR_MOVIES", payload: data });
				}
			})
			.catch((error) => {
				dispatch({ type: "ERROR", payload: error.message });
			});
		//clean up function of the effect, so that it wont update the state if the componenet is un-mounted
		return () => (isMounted.current = false);
	}, [baseUrl]);

	return state;
};

export default useFetch;
