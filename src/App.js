import * as ROUTES from "./constants/routes";
import { Routes, Route } from "react-router-dom";
import {
	HomePage,
	SignInPage,
	SignUpPage,
	BrowsePage,
	CreditPage,
	CastPage,
} from "./pages";
import { RequireAuth, RouteRedirect } from "./utils/redirectRoute";
import useAuthListener from "./hooks/useAuthListener";

function App() {
	const user = useAuthListener();
	return (
		<>
			<Routes>
				<Route
					path={ROUTES.HOME}
					element={
						<RouteRedirect loggedPath={ROUTES.BROWSE} user={user}>
							<HomePage />
						</RouteRedirect>
					}
				/>
				<Route
					path={ROUTES.SIGN_IN}
					element={
						<RouteRedirect loggedPath={ROUTES.BROWSE} user={user}>
							<SignInPage />
						</RouteRedirect>
					}
				/>
				<Route
					path={ROUTES.SIGN_UP}
					element={
						<RouteRedirect loggedPath={ROUTES.BROWSE} user={user}>
							<SignUpPage />
						</RouteRedirect>
					}
				/>
				<Route
					path={ROUTES.BROWSE}
					element={
						<RequireAuth user={user}>
							<BrowsePage />
						</RequireAuth>
					}
				/>
				<Route
					path={`${ROUTES.CREDIT}/:type/:id`}
					element={
						<RequireAuth user={user}>
							<CreditPage />
						</RequireAuth>
					}
				/>
				<Route
					path={`${ROUTES.CAST}/:id`}
					element={
						<RequireAuth user={user}>
							<CastPage />
						</RequireAuth>
					}
				/>
			</Routes>
		</>
	);
}

export default App;
