import * as ROUTES from "../constants/routes";
import { Header, Profile } from "../components";
import logo from "../logo.svg";

const ProfileContainer = ({ user, setProfile }) => {
	return (
		<>
			<Header bg={false}>
				<Header.Frame>
					<Header.Logo to={ROUTES.HOME} src={logo} alt="Netflex" />
				</Header.Frame>
			</Header>

			<Profile>
				<Profile.Title>Who's watching?</Profile.Title>
				<Profile.List>
					<Profile.Item
						onClick={() =>
							setProfile({
								displayName: user.displayName,
								photoURL: user.photoURL,
							})
						}
					>
						<Profile.Picture src={user.photoURL} alt="profile-pic" />
						<Profile.Name>{user.displayName}</Profile.Name>
					</Profile.Item>
				</Profile.List>
			</Profile>
		</>
	);
};

export default ProfileContainer;
