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
import useFetch from "../../hooks/useFetch";
import * as ENDPOINT from "../../constants/ENDPOINTS";

export const PlayerContext = createContext();

const Player = function Player({ children, media, ...restProps }) {
	const [showPlayer, setShowPlayer] = useState(false);
	const { itemID, itemFeature } = useContext(FeatureContext);
	let type;
	let id;
	if (media) {
		type = media.title ? "movie" : "tv";
		id = media.id;
	} else {
		id = itemID;
		type = itemFeature.title ? "movie" : "tv";
	}

	const data = useFetch(ENDPOINT.getVideo(type, id));
	// const data = useFetch(ENDPOINT.getVideo(type, itemID));
	return (
		<PlayerContext.Provider value={{ showPlayer, setShowPlayer, data }}>
			<Container {...restProps}>{children}</Container>
		</PlayerContext.Provider>
	);
};

Player.Video = function PlayerVideo({ ...restProps }) {
	const { showPlayer, setShowPlayer, data } = useContext(PlayerContext);

	return (
		<>
			{showPlayer &&
				ReactDOM.createPortal(
					<Overlay onClick={() => setShowPlayer(false)}>
						<Inner>
							{!data.loading && Object.keys(data.Data).length && (
								<WatchVideo
									src={`https://www.youtube.com/embed/${
										data.Data.results.filter(
											(item) => item.type === "Trailer"
										)[0].key
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
	const { setShowPlayer, data } = useContext(PlayerContext);
	let disabled = true;
	if (
		!data.loading &&
		Object.keys(data.Data).length &&
		data.Data.results.length > 0
	) {
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
