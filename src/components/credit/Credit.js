import { Container, Card, Title, Text, TextContainer } from "./credit.style";

const Credit = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Credit.Card = ({ children, ...restProps }) => {
	return <Card {...restProps}>{children}</Card>;
};

Credit.Title = ({ children, ...restProps }) => {
	return <Title {...restProps}>{children}</Title>;
};

Credit.Text = ({ to, state, children, ...restProps }) => {
	return (
		<Text to={to} state={state} {...restProps}>
			{children}
		</Text>
	);
};

Credit.TextContainer = ({ children, ...restProps }) => {
	return <TextContainer {...restProps}>{children}</TextContainer>;
};

export default Credit;
