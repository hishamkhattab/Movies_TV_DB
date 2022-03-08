import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	height: 100%;
	margin-top: 20px;
	flex-wrap: wrap;

	@media (max-width: 1000px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const ButtonLink = styled(ReactRouterLink)`
	display: flex;
	background-color: #e50914;
	color: white;
	border: 0;
	align-items: center;
	text-transform: uppercase;
	padding: 0 32px;
	font-size: 26px;
	cursor: pointer;
	text-decoration: none;

	&:hover {
		background: #f40612;
	}

	@media (max-width: 1000px) {
		height: 50px;
		font-size: 16px;
		margin-top: 20px;
		font-weight: bold;
	}
`;

export const Break = styled.div`
	flex-basis: 100%;
	height: 0;
`;
export const Text = styled.p`
	margin-bottom: 10px;
	font-size: 19.2px;
	color: white;
	text-align: center;

	@media (max-width: 600px) {
		font-size: 16px;
		line-height: 22px;
	}
`;
