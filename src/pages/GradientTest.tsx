import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { gradientsList, Gradient } from '../constants/gradientsList';
import styled from 'styled-components';

const GradientTest = () => {
	const params = useParams();
	const navigate = useNavigate();
	const [currentGradient, setCurrentGradient] = useState<Gradient | null>(null);
	const [currentLowThreshold, setCurrentLowThreshold] = useState<number>(0);
	const [currentHighThreshold, setCurrentHighThreshold] = useState<number>(100);
	const [step, setStep] = useState<number>(1);
	const [newProposition, setNewProposition] = useState<number>(0);
	const [colorValue, setColorValue] = useState<string>('');

	const redirectToResult = () => {
		if (!currentGradient) return;
		navigate(
			`/gradient/${currentGradient.name}/result/${Math.floor(currentLowThreshold * 10000)}`,
		);
	};

	const reset = () => {
		setCurrentLowThreshold(0);
		setCurrentHighThreshold(100);
		setStep(1);
		setNewProposition(Math.random() > 0.5 ? 0 : 100);
	};

	const chooseFirstColor = () => {
		setCurrentLowThreshold(newProposition);
		setStep(step + 1);
	};

	const chooseSecondColor = () => {
		setCurrentHighThreshold(newProposition);
		setStep(step + 1);
	};

	useEffect(() => {
		const value =
			((Math.random() * 40 + 30) *
				(currentHighThreshold - currentLowThreshold)) /
				100 +
			currentLowThreshold;
		console.log('New Proposition:', value);
		setNewProposition(value);
	}, [step]);

	useEffect(() => {
		const gradientFound = gradientsList.find(
			(gradient) => gradient.name === params.gradientName,
		);
		setCurrentGradient(gradientFound ?? null);
		setCurrentLowThreshold(0);
		setCurrentHighThreshold(100);
		setStep(1);
		setNewProposition(Math.random() > 0.5 ? 0 : 100);
	}, [params.gradientName]);

	useEffect(() => {
		console.log('Current Low Threshold:', currentLowThreshold);
		console.log('Current High Threshold:', currentHighThreshold);
		if (currentHighThreshold - currentLowThreshold <= 100 / 512) {
			redirectToResult();
		}
	}, [currentLowThreshold, currentHighThreshold]);

	useEffect(() => {
		if (currentGradient) {
			const color1 = currentGradient.colors[0].replace('#', '').split('');
			const color2 = currentGradient.colors[1].replace('#', '').split('');
			const newColor = color1
				.map((_, i) => {
					if (i % 2 === 0) {
						return;
					} else {
						const lowColor = parseInt(color1[i - 1] + color1[i], 16);
						const highColor = parseInt(color2[i - 1] + color2[i], 16);
						const diff = highColor - lowColor;
						const newValue = Math.round(
							lowColor + (diff * newProposition) / 100,
						);
						return newValue.toString(16).padStart(2, '0');
					}
				})
				.filter((c) => c !== undefined);
			setColorValue(`#${newColor.join('')}`);
		}
	}, [currentGradient, newProposition]);

	if (!currentGradient) {
		return <div>Gradient not found</div>;
	}

	return (
		<div
			style={{
				backgroundColor: colorValue,
				flex: 1,
				width: '100%',
				height: '100%',
			}}
		>
			<ButtonWrapper>
				<Button onClick={chooseFirstColor}>
					This is {currentGradient.colorsNames[0]}
				</Button>
				<Button onClick={reset}>Reset</Button>
				<Button onClick={chooseSecondColor}>
					This is {currentGradient.colorsNames[1]}
				</Button>
			</ButtonWrapper>
		</div>
	);
};

const ButtonWrapper = styled.div`
	display: flex;
	position: absolute;
	bottom: 100px;
	left: 50%;
	transform: translateX(-50%);
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

export default GradientTest;
