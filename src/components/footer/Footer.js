import {
	Container,
	Row,
	Column,
	Title,
	Text,
	Break,
	TitleLink,
	Link,
	Image,
} from "./footer.style";

const Footer = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Footer.Row = ({ children, ...restProps }) => {
	return <Row {...restProps}>{children}</Row>;
};

Footer.Column = ({ children, ...restProps }) => {
	return <Column {...restProps}>{children}</Column>;
};

Footer.TitleLink = ({ children, ...restProps }) => {
	return <TitleLink {...restProps}>{children}</TitleLink>;
};

Footer.Link = ({ children, ...restProps }) => {
	return <Link {...restProps}>{children}</Link>;
};

Footer.Title = ({ children, ...restProps }) => {
	return <Title {...restProps}>{children}</Title>;
};

Footer.Text = ({ children, ...restProps }) => {
	return <Text {...restProps}>{children}</Text>;
};

Footer.Break = ({ children, ...restProps }) => {
	return <Break {...restProps}>{children}</Break>;
};

Footer.Image = ({ ...restProps }) => {
	return <Image {...restProps} />;
};

export default Footer;
