import { Container, Break, ButtonLink, Text } from "./SignUpForm.style";

const SignUpForm = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

SignUpForm.ButtonLink = ({ children, ...restProps }) => {
	return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

SignUpForm.Break = ({ ...restProps }) => {
	return <Break {...restProps} />;
};

SignUpForm.Text = ({ children, ...restProps }) => {
	return <Text {...restProps}>{children}</Text>;
};

export default SignUpForm;
