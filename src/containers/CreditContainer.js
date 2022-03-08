import { useContext, useState, useEffect } from "react";
import { FirebaseContext } from "../contexts/firebase";
import { Loading, Header, Credit } from "../components";
import logo from "../logo.svg";
import { signOut } from "firebase/auth";
import { mediaCredit } from "../constants/ENDPOINTS";
import axios from "../lib/axios";
import * as ROUTES from "../constants/routes";
import { useLocation } from "react-router-dom";

const CreditContainer = ({ type, id }) => {
	const [media, setMedia] = useState({});
	const [loading, setLoading] = useState(true);
	const { auth } = useContext(FirebaseContext);
	const user = auth.currentUser || {};
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		const getData = async () => {
			const request = await axios.get(mediaCredit(type, id));
			setMedia(request.data);
			setLoading(false);
		};

		getData();
	}, [id, type]);

	const truncate = (str, n) => {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	};
	const location = useLocation();
	const { img, title, overview } = location.state;
	let castCounter = 0;
	let crewCounter = 0;
	return (
		<>
			{loading && Object.keys(media).length === 0 && (
				<Loading src={user.photoURL} alt="user-photo" />
			)}
			{!loading && <Loading.ReleaseBody />}
			<Header src={img} dontShowOnSmallViewPort>
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
				<Header.Feature media={media}>
					<Header.FeatureCallout>Watch {title} Now.</Header.FeatureCallout>
					<Header.Text>{truncate(overview, 150)}</Header.Text>
					<Header.Buttons media={media} />
					<Header.Video />
				</Header.Feature>
			</Header>
			<Credit>
				<Credit.Card>
					<Credit.Title>Cast</Credit.Title>
					<Credit.TextContainer>
						{media.cast?.map((item) => {
							const { credit_id, id, name, profile_path } = item;
							castCounter = castCounter + 1;
							if (castCounter < 5) {
								return (
									<Credit.Text
										key={credit_id}
										to={`${ROUTES.CAST}/${id}`}
										state={{ name: name, profile: profile_path }}
									>
										{name}
									</Credit.Text>
								);
							} else {
								return null;
							}
						})}
					</Credit.TextContainer>
				</Credit.Card>
				<Credit.Card>
					{media.crew?.length > 0 && <Credit.Title>Crew</Credit.Title>}
					<Credit.TextContainer>
						{media.crew?.map((item) => {
							crewCounter = crewCounter + 1;
							if (crewCounter < 3) {
								const { job, credit_id, name } = item;
								return (
									<Credit.Text
										key={credit_id}
										to={`${ROUTES.CAST}/${id}`}
										disable={"true"}
									>
										{`${name} as ${job}`}
									</Credit.Text>
								);
							} else {
								return null;
							}
						})}
					</Credit.TextContainer>
				</Credit.Card>
			</Credit>
		</>
	);
};

export default CreditContainer;
