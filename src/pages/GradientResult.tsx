import { Gradient, gradientsList } from '../constants/gradientsList';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router';
import { useState, useEffect } from 'react';

const GradientResult = () => {
	const params = useParams();
	const navigate = useNavigate();
	const [currentGradient, setCurrentGradient] = useState<Gradient | null>(null);

	useEffect(() => {
		const gradientFound = gradientsList.find(
			(gradient) => gradient.name === params.gradientName,
		);
		setCurrentGradient(gradientFound ?? null);
	}, [params.gradientName]);

	if (!currentGradient) {
		return <div>Gradient not found</div>;
	}

	return (
		<>
			<h1>Result</h1>
			<GradientContainer gradient={currentGradient}>
				<Marker value={Number(params.threshold) / 10000} />
			</GradientContainer>
			<Button onClick={() => navigate('/')}>Home</Button>
		</>
	);
};

const GradientContainer = styled.div<{ gradient: Gradient }>`
	width: calc(100% - 40px);
	height: 600px;
	background: linear-gradient(
		to right,
		${(props) => props.gradient.colors.join(', ')}
	);
	position: relative;
`;

const Marker = styled.div<{ value: number }>`
	position: absolute;
	width: 0px;
	height: 600px;
	top: 0px;
	left: ${(props) => props.value}%;
	border: dashed 2px var(--border);
`;

const Button = styled.button`
	cursor: pointer;
	padding: 12px 24px;
	background-color: var(--bg);
	border: none;
	border-radius: 4px;
	font-size: 16px;
	font-weight: bold;
	margin: 8px;
	transition: background-color 0.3s;

	&:hover {
		background-color: var(--code-bg);
	}
`;

export default GradientResult;
