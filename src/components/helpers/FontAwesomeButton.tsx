import {
	FontAwesomeIcon,
	FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import { ButtonProps } from 'react-html-props';

interface FontAwesomeButtonProps extends Omit<FontAwesomeIconProps, 'onClick'> {
	onClick: () => void;
}

const FontAwesomeButton: React.FC<FontAwesomeButtonProps> = ({
	onClick,
	...props
}) => {
	return (
		<button onClick={onClick}>
			<FontAwesomeIcon {...props} />
		</button>
	);
};

export default FontAwesomeButton;
