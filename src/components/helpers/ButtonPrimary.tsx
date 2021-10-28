import { ButtonProps } from 'react-html-props';

interface Props extends ButtonProps {
	btnColor: string;
}

const ButtonPrimary: React.FC<Props> = (props) => {
	const col = props.btnColor ?? 'gray';
	return (
		<button
			{...props}
			className={`p-2 px-4 bg-${col}-200 rounded text-${col}-700 hover:bg-${col}-500 hover:text-white transition ${props.className}`}
		>
			{props.children}
		</button>
	);
};

export default ButtonPrimary;
