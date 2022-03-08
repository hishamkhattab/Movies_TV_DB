import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../contexts/firebase";
import { onAuthStateChanged } from "firebase/auth";

const useAuthListener = () => {
	const [user, setUser] = useState(
		JSON.parse(sessionStorage.getItem("authUser"))
	);

	const { auth } = useContext(FirebaseContext);

	useEffect(() => {
		const listener = onAuthStateChanged(auth, (user) => {
			//to get a hand on the user's first name that he/she entered when signing up

			if (user) {
				sessionStorage.setItem("authUser", JSON.stringify(user));
				setUser(user);
			} else {
				sessionStorage.removeItem("authUser");
				setUser(null);
			}
		});

		return () => listener();
	}, [auth]);

	return user;
};

export default useAuthListener;
