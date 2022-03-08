import { useLocation } from "react-router-dom";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

const HeaderContainer = ({ children }) => {
	const location = useLocation();

	return (
		<Header>
			<Header.Frame>
				<Header.Logo to={ROUTES.HOME} src={logo} alt="TMDB" />
				{location.pathname === "/" && (
					<Header.ButtonLink to={ROUTES.SIGN_IN}>Sign in</Header.ButtonLink>
				)}
			</Header.Frame>
			{children}
		</Header>
	);
};

export default HeaderContainer;
