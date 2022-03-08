import { useContext, useState, useEffect } from "react";
import { FirebaseContext } from "../contexts/firebase";
import { Loading, Card } from "../components";
import EndPoint from "../constants/ENDPOINTS";
import {
	ProfileContainer,
	FooterContainer,
	CardContainer,
	CoverHeaderContainer,
} from "../containers";

const BrowseContainer = () => {
	//state to set the profile of the user
	const [profile, setProfile] = useState({});
	const [loading, setLoading] = useState(true);
	const { auth } = useContext(FirebaseContext);
	const user = auth.currentUser || {};

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, [profile.displayName]);

	return (
		<>
			{profile.displayName && (
				<>
					{loading && <Loading src={user.photoURL} alt="user-photo" />}
					{!loading && <Loading.ReleaseBody />}
					<CoverHeaderContainer />
					<Card.Group>
						<CardContainer
							title={"Netflix Originals"}
							url={EndPoint.netflixOriginals}
							isLarge
						/>
						<CardContainer title={"Trending Now"} url={EndPoint.trending} />
						<CardContainer
							title={"Trending Now in Egypt"}
							url={EndPoint.trendingEgypt}
						/>
						<CardContainer title={"Top Rated"} url={EndPoint.topRated} />
						<CardContainer
							title={"Action Movies"}
							url={EndPoint.actionMovies}
						/>
						<CardContainer
							title={"Animated Movies"}
							url={EndPoint.animatedMovies}
						/>
						<CardContainer
							title={"Thriller Movies"}
							url={EndPoint.thrillerMovies}
						/>
						<CardContainer
							title={"On Air Tv Shows"}
							url={EndPoint.onAirSeries}
						/>
					</Card.Group>

					<FooterContainer />
				</>
			)}
			{!profile.displayName && (
				<ProfileContainer user={user} setProfile={setProfile} />
			)}
		</>
	);
};

export default BrowseContainer;
