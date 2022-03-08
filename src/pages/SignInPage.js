import { HeaderContainer, FooterContainer } from "../containers";
import { Form } from "../components";
import { useContext } from "react";
import { FirebaseContext } from "../contexts/firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as ROUTES from "../constants/routes";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignInPage = () => {
	const { auth } = useContext(FirebaseContext);
	const navigate = useNavigate();

	const [emailAddress, setEmailAddress] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	//regexp to check
	const isInValid = password === "" || emailAddress === "";

	const handleSignin = (e) => {
		e.preventDefault();

		// Sign-in with user credintial by firebase
		signInWithEmailAndPassword(auth, emailAddress, password)
			.then(() => {
				navigate(ROUTES.BROWSE);
			})
			.catch((error) => {
				setEmailAddress("");
				setPassword("");
				setError(error.message);
			});
	};

	return (
		<>
			<HeaderContainer>
				<Form>
					<Form.Title>Sign In</Form.Title>
					{error && <Form.Error>{error}</Form.Error>}
					<Form.Base>
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
						<Form.Submit disabled={isInValid} onClick={handleSignin}>
							Sign in
						</Form.Submit>
					</Form.Base>
					<Form.Text>
						New to TMDB?
						<Form.Link to={ROUTES.SIGN_UP}> Sign up now.</Form.Link>
					</Form.Text>
					<Form.TextSmall>
						Sign-in is controlled and secure by Google
					</Form.TextSmall>
				</Form>
			</HeaderContainer>
			<FooterContainer />
		</>
	);
};

export default SignInPage;
