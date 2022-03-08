import { useState, createContext, useContext } from "react";
import {
	Title,
	Frame,
	Item,
	Header,
	Body,
	Container,
	Inner,
} from "./accordion.style";

const ToggleContext = createContext();

const Accordion = ({ children, ...restProps }) => {
	return (
		<Container {...restProps}>
			<Inner>{children}</Inner>
		</Container>
	);
};

Accordion.Title = ({ children, ...restProps }) => {
	return <Title {...restProps}>{children}</Title>;
};

Accordion.Frame = ({ children, ...restProps }) => {
	return <Frame {...restProps}>{children}</Frame>;
};

//must use the old styled function, because we can't identify React Hooks inside none React component
Accordion.Item = function AccordionItem({ children, ...restProps }) {
	const [toggleShow, setToggleShow] = useState(false);
	return (
		<ToggleContext.Provider value={{ setToggleShow, toggleShow }}>
			<Item {...restProps}>{children}</Item>
		</ToggleContext.Provider>
	);
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
	const { setToggleShow, toggleShow } = useContext(ToggleContext);
	return (
		<Header
			onClick={() => setToggleShow((prevState) => !prevState)}
			{...restProps}
		>
			{children}
			{toggleShow ? (
				<img src="/images/icons/close-slim.png" alt="close" />
			) : (
				<img src="/images/icons/add.png" alt="add" />
			)}
		</Header>
	);
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
	const { toggleShow } = useContext(ToggleContext);
	return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};

export default Accordion;
