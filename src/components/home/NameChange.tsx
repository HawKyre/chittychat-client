import Input from '@components/helpers/Input';
import { ConnectionContext } from 'context/ConnectionContext';
import { useContext } from 'react';
import { InputProps } from 'react-html-props';

interface NameChangeProps extends InputProps {}

const NameChange: React.FC<NameChangeProps> = (props) => {
	const { setUser, user } = useContext(ConnectionContext)!;

	return (
		// <input
		// 	{...props}
		// 	className={`p-2 text-lg ${props.className}`}
		// 	type="text"
		// 	placeholder="Username..."
		// 	value={user}
		// 	onChange={(e) => {
		// 		setUser(e.target.value);
		// 	}}
		// />
		<Input
			placeholder="Username..."
			value={user}
			onChange={(e) => {
				setUser(e.target.value);
			}}
		/>
	);
};

export default NameChange;
