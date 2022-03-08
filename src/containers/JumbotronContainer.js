import { Jumbotron } from "../components/index";
import jumbData from "../fixtures/jumbo.json";

const JumbotronContainer = () => {
	return (
		<Jumbotron.Container>
			{jumbData.map((item) => {
				const { id, title, subTitle, image, alt, direction } = item;
				return (
					<Jumbotron key={id} direction={direction}>
						<Jumbotron.Card>
							<Jumbotron.Title>{title}</Jumbotron.Title>
							<Jumbotron.SubTitle>{subTitle}</Jumbotron.SubTitle>
						</Jumbotron.Card>
						<Jumbotron.Card>
							<Jumbotron.Image src={image} alt={alt} />
						</Jumbotron.Card>
					</Jumbotron>
				);
			})}
		</Jumbotron.Container>
	);
};

export default JumbotronContainer;
