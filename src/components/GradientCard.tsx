import { Gradient } from '../constants/gradientsList';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

interface GradientCardProps {
	gradient: Gradient;
}

const GradientCard = ({ gradient }: GradientCardProps) => {
	const redirect = useNavigate();
	return (
		<CardBlock
			onClick={() => {
				redirect(`/gradient/${gradient.name}`);
			}}
		>
			<Card gradient={gradient} />
			<h2>{gradient.name}</h2>
		</CardBlock>
	);
};

const CardBlock = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	width: 300px;
	height: 240px;

	border: 1px solid #ccc;
	border-radius: 8px;

	gap: 12px;

	overflow: hidden;

	cursor: pointer;
`;

const Card = styled.div<{ gradient: Gradient }>`
	flex: 1;
	width: 100%;
	background: linear-gradient(
		to right,
		${(props) => props.gradient.colors.join(', ')}
	);
`;

export default GradientCard;
