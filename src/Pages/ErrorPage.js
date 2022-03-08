import { Link } from "react-router-dom";
import { MdError } from "react-icons/md";
const Error = ({ errorMsg }) => {
	console.log(errorMsg);
	return (
		<main className="alert-wrapper">
			<MdError className="error-logo" />
			<h1 className="section-title">Oops!</h1>
			<p>The page you were looking for doesn't exist</p>
			<button className="btn error-btn">
				<Link to="/">Go To home page</Link>
			</button>
			{errorMsg && <p className="error-msg">{errorMsg}</p>}
		</main>
	);
};

export default Error;
