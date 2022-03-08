import {
	Item,
	Inner,
	Container,
	Card,
	Title,
	SubTitle,
	Image,
} from "./jumbotron.style";

const Jumbotron = ({ children, direction, ...restProps }) => {
	return (
		<Item>
			<Inner direction={direction} {...restProps}>
				{children}
			</Inner>
		</Item>
	);
};

Jumbotron.Container = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Card = ({ children, ...restProps }) => {
	return <Card {...restProps}>{children}</Card>;
};

Jumbotron.Title = ({ children, ...restProps }) => {
	return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = ({ children, ...restProps }) => {
	return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = ({ src, ...restProps }) => {
	return <Image src={src} {...restProps} />;
};

export default Jumbotron;
