import { Spinner, LockBody, Picture, ReleaseBody } from "./loading.style";

const Loading = ({ src, ...restProps }) => {
	return (
		<Spinner {...restProps}>
			<LockBody />
			<Picture src={`images/users/${src}.png`} alt="user" />
		</Spinner>
	);
};

Loading.ReleaseBody = () => {
	return <ReleaseBody />;
};

export default Loading;
