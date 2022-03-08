import { createContext, useState, useContext, useEffect } from "react";
import {
	Container,
	Button,
	Overlay,
	Inner,
	Close,
	WatchVideo,
} from "./player.style";
import ReactDOM from "react-dom";
import { FeatureContext } from "../card/Card";
import { getVideo } from "../../constants/ENDPOINTS";
import axios from "../../lib/axios";

export const PlayerContext = createContext();

const Player = function Player({ children, media, ...restProps }) {
	const [showPlayer, setShowPlayer] = useState(false);
	const { itemID, itemFeature } = useContext(FeatureContext);
	const [videoData, setVideoData] = useState({});

	const id = itemFeature.id;
	const type = itemFeature.title ? "movie" : "tv";

	useEffect(() => {
		const getVideoResult = async () => {
			const video = await axios.get(getVideo(type, id));
			setVideoData(video);
		};

		getVideoResult();
	}, [id, type]);

	return (
		<PlayerContext.Provider value={{ showPlayer, setShowPlayer, videoData }}>
			<Container {...restProps}>{children}</Container>
		</PlayerContext.Provider>
	);
};

Player.Video = function PlayerVideo({ ...restProps }) {
	const { showPlayer, setShowPlayer, videoData } = useContext(PlayerContext);

	console.log(videoData);
	return (
		<>
			{showPlayer &&
				ReactDOM.createPortal(
					<Overlay onClick={() => setShowPlayer(false)}>
						<Inner>
							{/* check if results inside data */}
							{Object.keys(videoData.data.results).length > 0 && (
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

Player.Button = function PlayerButton({ ...restProps }) {
	const { setShowPlayer, videoData } = useContext(PlayerContext);
	let disabled = true;
	if (Object.keys(videoData).length > 0 && videoData.data.results.length > 0) {
		disabled = false;
	}

	return (
		<Button
			disabled={disabled}
			onClick={() => setShowPlayer((showPlayer) => !showPlayer)}
		>
			Play
		</Button>
	);
};

export default Player;
