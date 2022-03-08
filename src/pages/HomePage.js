import {
	HeaderContainer,
	JumbotronContainer,
	AccordionContainer,
	FooterContainer,
} from "../containers";
import * as ROUTES from "../constants/routes";
import { SignUpForm, Feature } from "../components";
const HomePage = () => {
	return (
		<>
			<HeaderContainer>
				<Feature>
					<Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
					<Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
					<SignUpForm>
						<SignUpForm.Text>
							Millions of movies, TV shows and people to discover. Explore now.
						</SignUpForm.Text>
						<SignUpForm.Break />
						{/* wrap it with sign-up route */}
						<SignUpForm.ButtonLink to={ROUTES.SIGN_UP}>
							Sign Up
						</SignUpForm.ButtonLink>
					</SignUpForm>
				</Feature>
			</HeaderContainer>
			<JumbotronContainer />
			<AccordionContainer />
			<FooterContainer />
		</>
	);
};

export default HomePage;
