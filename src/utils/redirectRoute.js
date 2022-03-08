import { Navigate, Route, useLocation } from "react-router-dom";
export const RedirectUser = ({
	user,
	loogedInPath,
	children,
	element,
	...rest
}) => {
	return (
		<Route
			{...rest}
			element={element}
			render={() => {
				if (!user) {
					return children;
				}

				if (user) {
					return <Navigate to={loogedInPath} />;
				}

				return null;
			}}
		/>
	);
};

//if someone try to navigate to Browse-page re-direct to the sign-in page
export const ProtectedRoute = ({ user, children, element, ...rest }) => {
	<Route
		{...rest}
		element={element}
		render={({ location }) => {
			if (user) {
				return children;
			}
			if (!user) {
				return <Navigate to="/signin" state={{ path: location.pathname }} />;
			}

			return null;
		}}
	/>;
};

export const RequireAuth = ({ children, user }) => {
	const location = useLocation();

	if (!user) {
		return <Navigate to="/signin" state={{ path: location.pathname }} />;
	}

	return children;
};

export const RouteRedirect = ({ children, loggedPath, user }) => {
	const location = useLocation();

	if (user) {
		return (
			<Navigate
				to={loggedPath}
				state={{ path: location.pathname }}
				replace={true}
			/>
		);
	}

	return children;
};
