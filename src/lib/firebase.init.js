import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDJTN7gH3TALBjm9cZYGpCqSXu5A-rCG34",
	authDomain: "netflex-5a669.firebaseapp.com",
	projectId: "netflex-5a669",
	storageBucket: "netflex-5a669.appspot.com",
	messagingSenderId: "994718116161",
	appId: "1:994718116161:web:62d223697e8f9402cc59c0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth();
