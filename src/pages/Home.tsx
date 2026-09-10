import { gradientsList } from '../constants/gradientsList';
import GradientCard from '../components/GradientCard';
import styled from 'styled-components';

const Home = () => {
	return (
		<CardContainer>
			{gradientsList.map((gradient) => {
				return <GradientCard key={gradient.name} gradient={gradient} />;
			})}
		</CardContainer>
	);
};

const CardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	gap: 12px;
`;

export default Home;
