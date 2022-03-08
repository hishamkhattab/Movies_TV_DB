import axios from "axios";

import { baseURL } from "../constants/ENDPOINTS";

const instance = axios.create({
	baseURL: baseURL,
	headers: {
		"Content-type": "application/json",
	},
});

export default instance;

// useEffect(() => {
//     async function fetchData() {
//         const request = await axios.get(url)
//     };

//     fetchData()
// },[])
