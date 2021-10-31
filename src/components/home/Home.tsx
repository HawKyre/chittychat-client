import ButtonPrimary from '@components/helpers/ButtonPrimary';
import Input from '@components/helpers/Input';
import { ConnectionContext } from 'context/ConnectionContext';
import { useContext, useState } from 'react';
import NameChange from './NameChange';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
	const [roomInput, setRoomInput] = useState('');
	const { joinRoom, setUser, user } = useContext(ConnectionContext)!;

	return (
		<div className="h-screen flex flex-col gap-y-4 items-center justify-center">
			<h1 className="text-4xl">Chitty chat</h1>
			<div className="flex flex-row gap-x-2 items-center">
				<p>Username:</p>
				<NameChange />
			</div>
			<div className="flex flex-row gap-x-2 items-center">
				<p>Room:</p>
				<Input value={roomInput} setValue={setRoomInput} />
			</div>
			<ButtonPrimary
				disabled={roomInput === ''}
				onClick={() => {
					if (roomInput !== '') joinRoom(roomInput);
				}}
				btnColor="blue"
			>
				Join
			</ButtonPrimary>
		</div>
	);
};

export default Home;
