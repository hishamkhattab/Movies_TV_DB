import { createContext, useState, useContext } from "react";
import { Link } from "react-router-dom";
import * as ENDPOINTS from "../../constants/ENDPOINTS";
import * as ROUTES from "../../constants/routes";
import {
	Container,
	Group,
	Title,
	SubTitle,
	Text,
	FeatureTitle,
	FeatureText,
	FeatureClose,
	Maturity,
	Content,
	Meta,
	Entities,
	Item,
	Image,
	Feature,
	FeatureButtons,
} from "./card.style";

export const FeatureContext = createContext();

const Card = ({ children, ...restProps }) => {
	const [showFeature, setShowFeature] = useState(false);
	const [itemFeature, setItemFeature] = useState({});
	const [itemID, setItemID] = useState("");

	return (
		<FeatureContext.Provider
			value={{
				showFeature,
				setShowFeature,
				itemFeature,
				setItemFeature,
				itemID,
				setItemID,
			}}
		>
			<Container {...restProps}>{children}</Container>
		</FeatureContext.Provider>
	);
};

Card.Group = ({ children, ...restProps }) => {
	return <Group {...restProps}>{children}</Group>;
};

Card.Title = ({ children, ...restProps }) => {
	return <Title {...restProps}>{children}</Title>;
};

Card.Text = ({ children, ...restProps }) => {
	return <Text {...restProps}>{children}</Text>;
};

Card.SubTitle = ({ children, ...restProps }) => {
	return <SubTitle {...restProps}>{children}</SubTitle>;
};

Card.Meta = ({ children, ...restProps }) => {
	return <Meta {...restProps}>{children}</Meta>;
};

Card.Entities = ({ children, ...restProps }) => {
	return <Entities {...restProps}>{children}</Entities>;
};

Card.Item = function CardItem({
	item,
	id,
	children,
	personData,
	...restProps
}) {
	const { setShowFeature, setItemFeature, setItemID } =
		useContext(FeatureContext);
	return (
		<Item
			id={id}
			{...restProps}
			onClick={() => {
				if (!personData) {
					setShowFeature(true);
					setItemFeature(item);
				} else if (personData) {
					//setItemFeature with actor info
					console.log("clicked");
					setShowFeature(true);
					setItemFeature(personData);
					// setItemID(item.id);
				}
			}}
		>
			{children}
		</Item>
	);
};

Card.Image = ({ ...restProps }) => {
	return <Image {...restProps} />;
};

Card.Feature = function CardFeature({ children, isLarge, data, ...restProps }) {
	const { showFeature, itemFeature, setShowFeature } =
		useContext(FeatureContext);
	const {
		title,
		id,
		poster_path: poster,
		vote_average: vote,
		overview,
		backdrop_path: backdrop,
		genre_ids: genres,
	} = itemFeature;

	const type = title ? "movie" : "tv";
	const handleScroll = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
		setShowFeature(false);
	};

	return (
		<>
			{showFeature && (
				<Feature
					src={
						isLarge
							? `${ENDPOINTS.posterURL}/${poster}` ||
							  `/images/no-wall-images.png`
							: `${ENDPOINTS.posterURL}/${backdrop}` || `/images/no-image.jpg`
					}
					{...restProps}
				>
					<Content>
						<FeatureTitle>{title ? title : itemFeature.name}</FeatureTitle>
						<FeatureText>
							{overview ? overview : itemFeature.biography}
						</FeatureText>
						<FeatureClose onClick={() => setShowFeature(false)}>
							<img src="/images/icons/close.png" alt="close" />
						</FeatureClose>

						{vote && (
							<Group margin="30px 0" flexDirection="row" alignItems="center">
								<Maturity rating={vote}>{vote.toFixed(1)}</Maturity>
								{genres.map((genre) => {
									return (
										<FeatureText key={genre} fontWeight="bold">
											{ENDPOINTS.getGender(genre)}
										</FeatureText>
									);
								})}
							</Group>
						)}

						{!itemFeature.imdb_id && (
							<FeatureButtons>
								<Link
									to={`${ROUTES.CREDIT}/${type}/${id}`}
									state={{
										img: `${ENDPOINTS.posterURL}/${backdrop}`,
										title: itemFeature.name,
										overview,
									}}
									onClick={handleScroll}
								>
									Info
								</Link>
								{children}
							</FeatureButtons>
						)}
						{itemFeature.imdb_id && (
							<FeatureButtons>
								<p>IMDB</p>
							</FeatureButtons>
						)}
					</Content>
				</Feature>
			)}
		</>
	);
};

export default Card;
