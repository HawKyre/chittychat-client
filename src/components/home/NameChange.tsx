import { ConnectionContext } from 'context/ConnectionContext';
import { useContext } from 'react';

interface NameChangeProps {}

const NameChange: React.FC<NameChangeProps> = () => {
	const { setUser, user } = useContext(ConnectionContext)!;

	return (
		<input
			className="p-2 border-black border-b-2 text-lg"
			type="text"
			placeholder="Username..."
			value={user}
			onChange={(e) => {
				setUser(e.target.value);
			}}
		/>
	);
};

export default NameChange;
