import { Footer } from "../components";
import footerLogo from "../footer_logo.svg";

const FooterContainer = () => {
	return (
		<Footer>
			<Footer.Title>Questions? Contact us.</Footer.Title>
			<Footer.Break />
			<Footer.Row>
				<Footer.Column>
					<Footer.Image src={footerLogo} alt="logo" />
				</Footer.Column>

				<Footer.Column>
					<Footer.TitleLink>THE BASICS</Footer.TitleLink>
					<Footer.Link href="#">About TMDB</Footer.Link>
					<Footer.Link href="#">Contact Us</Footer.Link>
					<Footer.Link href="#">Support Forums</Footer.Link>
					<Footer.Link href="#">API</Footer.Link>
					<Footer.Link href="#">System Status</Footer.Link>
				</Footer.Column>

				<Footer.Column>
					<Footer.TitleLink>GET INVOLVED</Footer.TitleLink>
					<Footer.Link href="#">Contribution Bible</Footer.Link>
					<Footer.Link href="#">Add New Movie</Footer.Link>
					<Footer.Link href="#">Add New TV Show</Footer.Link>
				</Footer.Column>

				<Footer.Column>
					<Footer.TitleLink>COMMUNITY</Footer.TitleLink>
					<Footer.Link href="#">Guidelines</Footer.Link>
					<Footer.Link href="#">Discussions</Footer.Link>
					<Footer.Link href="#">Leaderboard</Footer.Link>
				</Footer.Column>

				<Footer.Column>
					<Footer.TitleLink>LEGAL</Footer.TitleLink>
					<Footer.Link href="#">Terms of Use</Footer.Link>
					<Footer.Link href="#">API Terms of Use</Footer.Link>
					<Footer.Link href="#">Privacy Policy</Footer.Link>
				</Footer.Column>
			</Footer.Row>
			<Footer.Break />
			<Footer.Text>The Movie Database</Footer.Text>
		</Footer>
	);
};

export default FooterContainer;
