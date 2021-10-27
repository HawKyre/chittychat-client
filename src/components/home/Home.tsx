import { useState } from 'react';

interface HomeProps {
	joinRoom: (roomName: string) => void;
}

const Home: React.FC<HomeProps> = ({ joinRoom }) => {
	const [roomInput, setRoomInput] = useState('');
	return (
		<div className="h-screen flex flex-col gap-y-4 items-center justify-center">
			<h1 className="text-4xl">Chitty chat</h1>
			<input
				className="p-2 border-blue-600 border-2 text-lg rounded-lg"
				type="text"
				placeholder="Room name..."
				value={roomInput}
				onChange={(e) => {
					setRoomInput(e.target.value);
				}}
			/>
			<button
				className="px-4 py-2 bg-blue-100 text-blue-600 hover:text-white hover:bg-blue-600 transition font-bold text-xl rounded-lg"
				disabled={roomInput === ''}
				onClick={() => {
					console.log(roomInput);

					if (roomInput !== '') joinRoom(roomInput);
				}}
			>
				Join
			</button>
		</div>
	);
};

export default Home;
