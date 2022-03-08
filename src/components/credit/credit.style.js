import styled from "styled-components/macro";
import { Link as ReactRouteLink } from "react-router-dom";
export const Container = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-bottom: 45px;
	width: 100&;
	@media (min-width: 1100px) {
		margin-top: -150px;
		flex-direction: row;
	}
`;

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px 15px;
	width: 50%;
	@media (max-width: 600px) {
		&:first-of-type {
			margin-bottom: 15px;
		}
	}
`;

export const Title = styled.h1`
	font-size: 24px;
	color: #e5e5e5;
	font-weight: bold;
	margin-left: 56px;
	margin-right: 56px;
	margin-top: 0;
`;

export const Text = styled(ReactRouteLink)`
	font-size: 12px;
	color: #e5e5e5;
	font-weight: bold;
	margin-top: 0;
	margin-bottom: 0;
	user-select: none;
	padding: 5px;
	text-decoration: none;
	text-transform: uppercase;
	pointer-events: ${({ disable }) => (disable ? "none" : "auto")};
`;

export const TextContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	max-width: 80%;
	padding: 15px;

	@media (max-width: 600px) {
		max-width: 100%;
	}
`;
