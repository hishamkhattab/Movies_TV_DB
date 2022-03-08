import { Link as ReactRouterLink } from "react-router-dom";
import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom";
import * as ROUTES from "../../constants/routes";
import requests, { getVideo, posterURL } from "../../constants/ENDPOINTS";
import axios from "../../lib/axios";
import { Card, Player } from "..";
import {
	Background,
	Container,
	Feature,
	Logo,
	ButtonLink,
	Text,
	FeatureCallout,
	Link,
	Group,
	Profile,
	Picture,
	Dropdown,
	Search,
	SearchIcon,
	SearchInput,
	Buttons,
	PlayButton,
	InfoLink,
	Overlay,
	Inner,
	WatchVideo,
	Close,
	SearchContainer,
	SearchInner,
	SearchClose,
} from "./header.stye";
import { useEffect } from "react";

export const PlayerContext = createContext();
const Header = ({ bg = true, children, ...restProps }) => {
	return <>{bg && <Background {...restProps}>{children}</Background>}</>;
};

Header.Feature = function HeaderFeature({ children, media, ...restProps }) {
	const [showPlayer, setShowPlayer] = useState(false);
	const type = media.title ? "movie" : "tv";
	const [videoData, setVideoData] = useState({});

	useEffect(() => {
		if (media.id) {
			const getVideoResult = async () => {
				const video = await axios.get(getVideo(type, media.id));
				setVideoData(video);
			};

			getVideoResult();
		}
	}, [media.id, type]);

	return (
		<PlayerContext.Provider value={{ showPlayer, setShowPlayer, videoData }}>
			<Feature {...restProps}>{children}</Feature>;
		</PlayerContext.Provider>
	);
};

Header.FeatureCallout = ({ children, ...restProps }) => {
	return <FeatureCallout {...restProps}>{children}</FeatureCallout>;
};

Header.Text = ({ children, ...restProps }) => {
	return <Text {...restProps}>{children}</Text>;
};

Header.TextLink = ({ children, ...restProps }) => {
	return <Link {...restProps}>{children}</Link>;
};

Header.Frame = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Header.Group = ({ children, ...restProps }) => {
	return <Group {...restProps}>{children}</Group>;
};

Header.Profile = ({ children, ...restProps }) => {
	return <Profile {...restProps}>{children}</Profile>;
};

Header.Picture = ({ src, ...restProps }) => {
	return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

Header.Dropdown = ({ children, ...restProps }) => {
	return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.Logo = ({ to, ...restProps }) => {
	return (
		<ReactRouterLink to={to}>
			<Logo {...restProps} />
		</ReactRouterLink>
	);
};

Header.ButtonLink = ({ to, children, ...restProps }) => {
	return (
		<ButtonLink to={to} {...restProps}>
			{children}
		</ButtonLink>
	);
};

Header.Search = function HeaderSearch({
	searchTerm,
	setSearchTerm,
	...restProps
}) {
	const [searchActive, setSearchActive] = useState(false);
	const [searchData, setSearchData] = useState([]);

	useEffect(() => {
		if (searchActive && searchTerm.length > 0) {
			const getResult = async () => {
				const request = await axios.get(requests.querySearch, {
					params: { query: searchTerm },
				});
				setSearchData(request);
			};

			const timer = setTimeout(() => {
				getResult();
			}, 2000);

			return () => clearTimeout(timer);
		}
	}, [searchActive, searchTerm]);

	const truncate = (str, n) => {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	};

	const handleSearch = () => {
		setSearchActive((searchActive) => !searchActive);
		setSearchData([]);
	};

	return (
		<Search {...restProps}>
			<SearchIcon>
				<img
					src="/images/icons/search.png"
					alt="search"
					onClick={() => setSearchActive((searchActive) => !searchActive)}
				/>
			</SearchIcon>
			<SearchInput
				value={searchTerm}
				onChange={({ target }) => setSearchTerm(target.value)}
				placeholder="Search films and series"
				active={searchActive}
			/>
			{searchTerm.length > 0 &&
				Object.keys(searchData).length > 0 &&
				searchData.data.results.length > 0 && (
					<SearchContainer>
						<SearchInner>
							<SearchClose onClick={handleSearch}>
								<img src="/images/icons/close.png" alt="close" />
							</SearchClose>

							<Card.Group notTop={true}>
								{searchData.data.results.filter(
									(item) => item.media_type === "person"
								).length > 0 && (
									<Card>
										<Card.Title>People.</Card.Title>
										<Card.Entities>
											{searchData.data.results
												.filter((item) => item.media_type === "person")
												.map((item) => {
													return (
														<Link
															to={`/cast/${item.id}`}
															state={{ knowFor: item.known_for }}
															key={item.id}
														>
															<Card.Item>
																<Card.Image
																	src={
																		`${posterURL}/${item.profile_path}` ||
																		`/images/no-image.jpg`
																	}
																/>
																<Card.Meta>
																	<Card.SubTitle>{item.name}</Card.SubTitle>
																	<Card.Text>
																		{item.known_for_department}
																	</Card.Text>
																</Card.Meta>
															</Card.Item>
														</Link>
													);
												})}
										</Card.Entities>
									</Card>
								)}
								{searchData.data.results.filter(
									(item) => item.media_type === "tv"
								).length > 0 && (
									<Card>
										<Card.Title>Tv Shows.</Card.Title>
										<Card.Entities>
											{searchData.data.results
												.filter((item) => item.media_type === "tv")
												.map((item) => {
													return (
														<Card.Item key={item.id} item={item}>
															<Card.Image
																src={
																	`${posterURL}/${item.poster_path}` ||
																	`/images/no-image.jpg`
																}
															/>
															<Card.Meta>
																<Card.SubTitle>
																	{item.stitle ||
																		item.name ||
																		item.original_name}
																</Card.SubTitle>
																<Card.Text>
																	{truncate(item.overview, 100)}
																</Card.Text>
															</Card.Meta>
														</Card.Item>
													);
												})}
										</Card.Entities>
										<Card.Feature>
											<Player>
												<Player.Button />
												<Player.Video />
											</Player>
										</Card.Feature>
									</Card>
								)}
								{searchData.data.results.filter(
									(item) => item.media_type === "movie"
								).length > 0 && (
									<Card>
										<Card.Title>Movies.</Card.Title>
										<Card.Entities>
											{searchData.data.results
												.filter((item) => item.media_type === "movie")
												.map((item) => {
													return (
														<Card.Item key={item.id} item={item}>
															<Card.Image
																src={
																	`${posterURL}/${item.poster_path}` ||
																	`/images/no-image.jpg`
																}
															/>
															<Card.Meta>
																<Card.SubTitle>
																	{item.stitle ||
																		item.name ||
																		item.original_name}
																</Card.SubTitle>
																<Card.Text>
																	{truncate(item.overview, 100)}
																</Card.Text>
															</Card.Meta>
														</Card.Item>
													);
												})}
										</Card.Entities>
										<Card.Feature>
											<Player>
												<Player.Button />
												<Player.Video />
											</Player>
										</Card.Feature>
									</Card>
								)}
							</Card.Group>
						</SearchInner>
					</SearchContainer>
				)}
		</Search>
	);
};

Header.Buttons = function HeaderButton({
	children,
	id,
	data,
	InfoBtn,
	...restProps
}) {
	const { setShowPlayer, videoData } = useContext(PlayerContext);
	let disabled = true;
	if (Object.keys(videoData).length > 0 && videoData.data.results.length > 0) {
		disabled = false;
	}

	return (
		<Buttons>
			{}
			<PlayButton
				disabled={disabled}
				onClick={() => setShowPlayer((showPlayer) => !showPlayer)}
			>
				Play
			</PlayButton>
			{InfoBtn && (
				<InfoLink to={`${ROUTES.CREDIT}/tv/${id}`} state={data} {...restProps}>
					Info
				</InfoLink>
			)}
		</Buttons>
	);
};

Header.Video = function PlayerVideo({ ...restProps }) {
	const { showPlayer, setShowPlayer, videoData } = useContext(PlayerContext);

	return (
		<>
			{showPlayer &&
				ReactDOM.createPortal(
					<Overlay onClick={() => setShowPlayer(false)}>
						<Inner>
							{/* check if results inside data */}
							{Object.keys(videoData.data.results).length && (
								<WatchVideo
									src={`https://www.youtube.com/embed/${
										videoData.data.results.filter((item) => {
											return item.type === "Trailer" || item.type === "Teaser";
										})[0].key
									}`}
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								/>
							)}

							<Close />
						</Inner>
					</Overlay>,
					document.body
				)}
		</>
	);
};

export default Header;
