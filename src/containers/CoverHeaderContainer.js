import { useContext, useState, useEffect } from "react";
import { FirebaseContext } from "../contexts/firebase";
import { signOut } from "firebase/auth";
import axios from "../lib/axios";
import logo from "../logo.svg";
import { Header } from "../components";
import EndPoint, { posterURL } from "../constants/ENDPOINTS";
import * as ROUTES from "../constants/routes";

const CoverHeaderContainer = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [coverMovie, setCoverMovie] = useState({});
	const { auth } = useContext(FirebaseContext);
	const user = auth.currentUser || {};
	const truncate = (str, n) => {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	};

	useEffect(() => {
		const getData = async () => {
			const request = await axios.get(EndPoint.netflixOriginals);
			setCoverMovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length - 1)
				]
			);
		};

		getData();
	}, []);

	console.log(coverMovie);
	return (
		<>
			{Object.keys(coverMovie).length > 0 && (
				<Header
					src={`${posterURL}${coverMovie.poster_path}`}
					dontShowOnSmallViewPort
				>
					<Header.Frame>
						<Header.Group>
							<Header.Logo to={ROUTES.HOME} src={logo} alt="TMDB" />
						</Header.Group>
						<Header.Group>
							<Header.Search
								searchTerm={searchTerm}
								setSearchTerm={setSearchTerm}
							/>
							<Header.Profile>
								<Header.Picture src={user.photoURL} />
								<Header.Dropdown>
									<Header.Group>
										<Header.Picture src={user.photoURL} />
										<Header.TextLink>{user.displayName}</Header.TextLink>
									</Header.Group>
									<Header.Group>
										<Header.TextLink onClick={() => signOut(auth)}>
											Sign Out
										</Header.TextLink>
									</Header.Group>
								</Header.Dropdown>
							</Header.Profile>
						</Header.Group>
					</Header.Frame>
					<Header.Feature media={coverMovie}>
						<Header.FeatureCallout>
							Watch{" "}
							{coverMovie?.name ||
								coverMovie?.title ||
								coverMovie?.original_name}{" "}
							Now.
						</Header.FeatureCallout>
						<Header.Text>{truncate(coverMovie.overview, 150)}</Header.Text>
						<Header.Buttons
							id={coverMovie.id}
							data={{
								img: `${posterURL}${coverMovie.poster_path}`,
								title:
									coverMovie?.name ||
									coverMovie?.title ||
									coverMovie?.original_name,
								overview: coverMovie.overview,
							}}
							InfoBtn
						/>
						<Header.Video />
					</Header.Feature>
				</Header>
			)}
		</>
	);
};

export default CoverHeaderContainer;
