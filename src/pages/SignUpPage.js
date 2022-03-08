import { HeaderContainer, FooterContainer } from "../containers";
import { Form } from "../components";
import { FirebaseContext } from "../contexts/firebase";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import * as ROUTES from "../constants/routes";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const SignUpPage = () => {
	const { auth } = useContext(FirebaseContext);
	const navigate = useNavigate();

	const [firstName, setFirstname] = useState("");

	const [emailAddress, setEmailAddress] = useState("");

	const [password, setPassword] = useState("");

	const [error, setError] = useState("");

	//check form input elements are valid
	const isInValid = firstName === "" || password === "" || emailAddress === "";

	const handleSignup = (e) => {
		e.preventDefault();

		//firebase
		createUserWithEmailAndPassword(auth, emailAddress, password)
			.then(() => {
				updateProfile(auth.currentUser, {
					displayName: firstName,
					photoURL: Math.floor(Math.random() * 5) + 1,
				}).then(() => {
					console.log(auth.currentUser);
					navigate(ROUTES.BROWSE);
				});
			})
			.catch((error) => {
				setFirstname("");
				setEmailAddress("");
				setPassword("");
				setError(error.message);
			});
	};
	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign Up</Form.Title>
					{error && <Form.Error>{error}</Form.Error>}

					<Form.Base onSubmit={handleSignup} method="POST">
						<Form.Input
							placeholder="First name"
							value={firstName}
							onChange={({ target }) => setFirstname(target.value)}
						/>
						<Form.Input
							placeholder="Email address"
							value={emailAddress}
							onChange={({ target }) => setEmailAddress(target.value)}
						/>
						<Form.Input
							type="password"
							autoComplete="off"
							placeholder="Password"
							value={password}
							onChange={({ target }) => setPassword(target.value)}
						/>
						<Form.Submit disabled={isInValid} type="submit">
							Sign Up
						</Form.Submit>
					</Form.Base>
					<Form.Text>
						Already a user?
						<Form.Link to={ROUTES.SIGN_IN}>Sign in now.</Form.Link>
					</Form.Text>
					<Form.TextSmall>
						This page is protected by Google reCAPTCHA to ensure you're not a
						bot. Learn more.
					</Form.TextSmall>
				</Form>
			</HeaderContainer>
			<FooterContainer />
		</>
	);
};

export default SignUpPage;
