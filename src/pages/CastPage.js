import { useLocation, useParams } from "react-router-dom";
import { Card } from "../components";
import { knowFor, posterURL } from "../constants/ENDPOINTS";
import {
	FooterContainer,
	CoverHeaderContainer,
	CardContainer,
} from "../containers";

const CastPage = () => {
	const { id } = useParams();
	const location = useLocation();

	return (
		<>
			<CoverHeaderContainer />
			<Card.Group>
				<Card>
					{location.state && <Card.Title>{location.state.name}</Card.Title>}
					<Card.Entities>
						{location.state && (
							<Card.Image
								src={`${posterURL}${location.state.profile}`}
								alt="profile"
							/>
						)}
					</Card.Entities>
				</Card>

				<CardContainer title={"Know For"} url={knowFor(id)} isLarge />
			</Card.Group>

			<FooterContainer />
		</>
	);
};

export default CastPage;
