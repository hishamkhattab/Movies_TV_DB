import { useParams } from "react-router-dom";
import { CardContainer, CreditContainer, FooterContainer } from "../containers";
import { mediaSimilar } from "../constants/ENDPOINTS";
const CreditPage = () => {
	const { type, id } = useParams();
	return (
		<>
			<CreditContainer id={id} type={type} />;
			{id && (
				<CardContainer
					title={"You May Also Like"}
					url={mediaSimilar(type, id)}
				/>
			)}
			<FooterContainer />
		</>
	);
};

export default CreditPage;
