import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Background = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #000;
	background: #000 url(${({ src }) => (src ? src : `../images/background.jpg`)})
		top left / cover no-repeat;
	background-blend-mode: hard-light;
	@media (max-width: 1100px) {
		${({ dontShowOnSmallViewPort }) =>
			dontShowOnSmallViewPort && "background: none;"}
	}
`;

export const Container = styled.div`
	display: flex;
	margin: 0 56px;
	height: 100px;
	justify-content: space-between;
	align-items: center;

	a {
		display: flex;
		justify-content: center;
	}

	@media (max-width: 1000px) {
		margin: 0 30px;
	}
`;

export const Feature = styled(Container)`
	padding: 150px 0 500px 0;
	flex-direction: column;
	align-items: normal;
	width: 50%;
	@media (max-width: 1100px) {
		display: none;
	}
`;

export const Logo = styled.img`
	height: 36px;
	width: 134px;
	margin-right: 40px;

	@media (min-width: 1449px) {
		height: 45px;
		width: 167px;
	}
`;

export const ButtonLink = styled(ReactRouterLink)`
	display: block;
	background-color: #e50914;
	width: 84px;
	height: fit-content;
	color: white;
	border: 0;
	font-size: 15px;
	border-radius: 3px;
	padding: 8px 17px;
	cursor: pointer;
	text-decoration: none;

	&:hover {
		background: #f40612;
	}
`;

export const Text = styled.p`
	color: white;
	font-size: 22px;
	line-height: normal;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0, 45);
	margin: 0;
`;

export const FeatureCallout = styled.h2`
	color: white;
	font-size: 50px;
	line-height: normal;
	font-weight: bold;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
	margin: 0;
	margin-bottom: 20px;
`;

export const Link = styled.p`
	color: white;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
	background-color: rgba(0, 0, 0, 0.75);
	padding: 5px;
	text-decoration: none;
	margin-right: 20px;
	font-weight: ${({ active }) => (active === "true" ? 700 : "normal")};

	&:hover {
		font-weight: bold;
		cursor: ${({ active }) => (active === "true" ? "default" : "pointer")};
	}
`;

export const Group = styled.div`
	display: flex;
	align-items: center;
`;

export const Picture = styled.button`
	background: url(${({ src }) => src});
	background-repeat: no-repeat;
	background-size: contain;
	border: 0;
	width: 32px;
	height: 32px;
	cursor: pointer;
`;

export const Dropdown = styled.div`
	display: none;
	position: absolute;
	background-color: black;
	padding: 10px;
	width: 100px;
	top: 32px;
	right: 10px;

	${Group}:last-of-type ${Link} {
		cursor: pointer;
		width: 100%;
	}

	${Group} {
		margin-bottom: 10px;

		&:last-of-type {
			margin-bottom: 0;
		}

		${Link} ,${Picture} {
			cursor: default;
			width: 50%;
		}
	}

	button {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	p {
		font-size: 12px;
		margin-bottom: 0;
		margin-top: 0;
	}
`;

export const Profile = styled.div`
	display: flex;
	align-items: center;
	margin-left: 20px;
	position: relative;

	button {
		cursor: pointer;
	}

	&:hover > ${Dropdown} {
		display: flex;
		flex-direction: column;
	}
`;

export const Search = styled.div`
	display: flex;
	align-items: center;

	svg {
		color: white;
		cursor: pointer;
	}

	@media (max-width: 700px) {
		display: none;
	}
`;

export const SearchIcon = styled.button`
	cursor: pointer;
	background-color: transparent;
	border: 0;

	img {
		filter: brightness(0) invert(1);
		width: 16px;
	}
`;

export const SearchInput = styled.input`
	background-color: #44444459;
	color: white;
	border: 1px solid white;
	transition: width 0.5s;
	font-size: 14px;
	margin-left: ${({ active }) => (active === true ? "10px" : "0")};
	padding: ${({ active }) => (active === true ? "0 10px" : "0")};
	opacity: ${({ active }) => (active === true ? "1" : "0")};
	width: ${({ active }) => (active === true ? "200px" : "0")};
`;

export const Buttons = styled.div`
	display: flex;
	align-items: center;
	margin-top: 20px;
	max-width: 300px;
`;

export const PlayButton = styled.button`
	box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
	background-color: #e6e6e6;
	color: #000;
	border-width: 0;
	padding: 10px 20px;
	border-radius: 5px;
	max-width: 130px;
	font-size: 20px;
	font-weight: bold;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 10px;
	cursor: pointer;
	transition: all 0.5s ease;

	&:hover {
		background-color: #ff1e1e;
		color: white;
	}
`;

export const InfoLink = styled(ReactRouterLink)`
	box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
	background-color: #e6e6e6;
	color: #000;
	border-width: 0;
	padding: 10px 20px;
	border-radius: 5px;
	text-decoration: none;
	max-width: 130px;
	font-size: 20px;
	font-weight: bold;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.5s ease;

	&:hover {
		background-color: #ff1e1e;
		color: white;
	}
`;

export const WatchVideo = styled.iframe`
	width: 100%;
	height: 500px;
`;

export const Close = styled.button`
	position: absolute;
	right: 15px;
	top: 15px;
	width: 22px;
	height: 22px;
	opacity: 0.3;
	background-color: transparent;
	border: 0;
	cursor: pointer;

	&:hover {
		opacity: 1;
	}

	&:before,
	&:after {
		position: absolute;
		left: 10px;
		top: 0;
		content: " ";
		height: 22px;
		width: 2px;
		background-color: #333;
	}

	&:before {
		transform: rotate(45deg);
	}
	&:after {
		transform: rotate(-45deg);
	}
`;

export const Overlay = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.75);
	margin: 0 20px;
`;

export const Inner = styled.div`
	position: relative;
	width: 100%;
	max-width: 900px;
	margin: auto;

	video {
		height: 100%;
		width: 100%;
	}
`;

export const SearchContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: absolute;
	top: 220px;
	left: 0;
	width: 100%;
	height: 100%;
	min-height: 100vh;
	background: rgba(0, 0, 0, 1);
	margin: 0 20px;
	z-index: 1000;
`;

export const SearchClose = styled.button`
	color: white;
	position: absolute;
	top: 20px;
	right: 20px;
	cursor: pointer;
	background-color: transparent;
	border: 0;

	img {
		filter: brightness(0) invert(1);
		width: 24px;
	}
`;

export const SearchInner = styled.div`
	position: relative;
	width: 100%;
	max-width: 900px;
	margin: auto;
`;
