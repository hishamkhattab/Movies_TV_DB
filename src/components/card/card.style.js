import styled from "styled-components/macro";

export const Title = styled.p`
	font-size: 24px;
	color: #e5e5e5;
	font-weight: bold;
	margin-left: 56px;
	margin-right: 56px;
	margin-top: 0;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 50px;
	box-sizing: border-box;

	> ${Title} {
		@media (max-width: 1000px) {
			margin-left: 30px;
		}
	}
	&:last-of-type {
		margin-bottom: 0;
	}
`;

export const Group = styled.div`
	display: flex;
	flex-direction: ${({ flexDirection }) =>
		flexDirection === "row" ? "row" : "column"};
	${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
	${({ margin }) => margin && `margin: ${margin}`};

	> ${Container}:first-of-type {
		@media (min-width: 1100px) {
			margin-top: ${({ notTop }) => (notTop ? "30px" : "-150px")};
		}
	}
`;

export const SubTitle = styled.p`
	font-size: 12px;
	color: #fff;
	font-weight: bold;
	margin-top: 0;
	margin-bottom: 0;
	user-select: none;
	display: none;
`;

export const Text = styled.p`
	margin-top: 5px;
	font-size: 10px;
	color: #fff;
	margin-bottom: 15px;
	user-select: none;
	display: none;
	line-height: normal;
`;

export const FeatureTitle = styled(Title)`
	margin-left: 0;
`;

export const FeatureText = styled.p`
	margin-right: 10px;
	margin-left: 0;
	text-transform: uppercase;
	font-size: 14px;
`;

export const Feature = styled.div`
	display: flex;
	flex-direction: row;
	background: #000
		url(${({ src }) => (src ? src : `/images/no-wall-images.png`)});
	background-blend-mode: luminosity;
	background-size: contain;
	position: relative;
	height: 360px;
	background-position-x: right;
	background-repeat: no-repeat;
	background-color: black;

	a {
		background-color: #e50914;
		border-color: #ff0a16;
		width: 115px;
		height: 45px;
		text-transform: uppercase;
		text-decoration: none;
		margin-right: 10px;
		font-weight: bold;
		color: white;
		font-size: 18px;
		height: 45px;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		padding-left: 0;

		&:hover {
			transform: scale(1.05);
			background-color: #ff0a16;
		}
	}

	@media (max-width: 1000px) {
		height: auto;
		background-size: auto;

		${Title} {
			font-size: 20px;
			line-height: 20px;
			margin-bottom: 10px;
		}

		${FeatureText} {
			font-size: 14px;
			color: white;
		}
	}
`;

export const FeatureClose = styled.button`
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
export const FeatureButtons = styled.div`
	display: flex;
	align-items: center;
`;

export const Meta = styled.div`
	display: none;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	padding: 10px;
	background-color: rgba(0, 0, 0, 0.8);
`;

export const Maturity = styled.div`
	display: grid;
	place-items: center;
	border-color: ${({ rating }) => (rating >= 7 ? "green" : "red")};
	border-radius: 50%;
	border-width: 3px;
	border-style: solid;
	padding: 10px;
	color: white;
	font-weight: bold;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
	margin-right: 10px;
	font-size: 12px;
`;

export const Entities = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	overflow-y: hidden;
	overflow-x: scroll;
	padding: 15px;

	&::-webkit-scrollbar {
		display: none;
	}

	&::moz-scrollbar {
		display: none;
	}

	/* &::-webkit-scrollbar-track {
		color: black;
	}

	&::-webkit-scrollbar-thumb {
		background-color: black;
		color: white;
		height: 1px;
	} */
`;

export const Content = styled.div`
	margin: 56px;
	max-width: 500px;
	line-height: normal;

	@media (max-width: 1000px) {
		margin: 30px;
		max-width: none;
	}
`;

export const Item = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 10px;
	position: relative;
	cursor: pointer;
	transition: transform 0.3s ease;

	&:hover {
		transform: scale(1.2);
		z-index: 99;
	}

	@media (min-width: 1200px) {
		&:hover ${Meta}, &:hover ${Text}, &:hover ${SubTitle} {
			display: block;
			z-index: 100;
		}
	}

	&:first-of-type {
		margin-left: 56px;

		@media (max-width: 1000px) {
			margin-left: 30px;
		}
	}

	&:last-of-type {
		margin-right: 56px;

		@media (max-width: 1000px) {
			margin-right: 30px;
		}
	}
`;

export const Image = styled.img`
	border: 0;
	/* width: 100%; */
	max-width: ${({ isLarge }) => (isLarge ? `200px` : `190px`)};
	cursor: pointer;
	height: auto;
	padding: 0;
	margin: 0;
	transition: transform 0.5s ease-in-out;
	filter: brightness(80%);
`;
