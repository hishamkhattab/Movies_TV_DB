import axios from "../lib/axios";
import { posterURL } from "../constants/ENDPOINTS";
import { useState } from "react";
import { useEffect } from "react";
import { Card, Player } from "../components";
const CardContainer = ({ title, url, isLarge }) => {
	const [media, setMedia] = useState([]);

	useEffect(() => {
		let flag = true;
		if (flag) {
			const fetchData = async () => {
				const request = await axios.get(url);
				setMedia(request.data.results);
			};

			fetchData();
		}
		return () => (flag = false);
	}, [url]);

	const truncate = (str, n) => {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	};

	return (
		<Card>
			<Card.Title>{title}</Card.Title>
			<Card.Entities>
				{media.map((item) => {
					const {
						poster_path,
						id,
						overview,
						title,
						backdrop_path: backdrop,
					} = item;

					return (
						<Card.Item key={id} item={item}>
							<Card.Image
								src={
									isLarge
										? `${posterURL}/${poster_path}` ||
										  `/images/no-wall-images.png`
										: backdrop
										? `${posterURL}/${backdrop}`
										: `/images/no-wall-images.png`
								}
								isLarge={isLarge}
							/>
							<Card.Meta>
								<Card.SubTitle>
									{title || item.name || item.original_name}
								</Card.SubTitle>

								<Card.Text>{truncate(overview, 100)}</Card.Text>
							</Card.Meta>
						</Card.Item>
					);
				})}
			</Card.Entities>
			<Card.Feature isLarge={isLarge}>
				<Player>
					<Player.Button />
					<Player.Video />
				</Player>
			</Card.Feature>
		</Card>
	);
};

export default CardContainer;
