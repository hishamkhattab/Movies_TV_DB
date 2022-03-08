import faqsData from "../fixtures/faqs.json";
import { Accordion, SignUpForm } from "../components";
import * as ROUTES from "../constants/routes";
const AccordionContainer = () => {
	return (
		<Accordion>
			<Accordion.Title>Frequently Asked Questions</Accordion.Title>
			<Accordion.Frame />
			{faqsData.map((item) => (
				<Accordion.Item key={item.id}>
					<Accordion.Header>{item.header}</Accordion.Header>
					<Accordion.Body>{item.body}</Accordion.Body>
				</Accordion.Item>
			))}

			<SignUpForm>
				<SignUpForm.Text>
					Millions of movies, TV shows and people to discover. Explore now.
				</SignUpForm.Text>
				<SignUpForm.ButtonLink to={ROUTES.SIGN_UP}>
					Sign up now
				</SignUpForm.ButtonLink>
				<SignUpForm.Break />
			</SignUpForm>
		</Accordion>
	);
};

export default AccordionContainer;
