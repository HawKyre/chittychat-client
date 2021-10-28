import { ConnectionContext } from 'context/ConnectionContext';
import { useContext } from 'react';
import { Room } from 'types/socket';

interface RoomListElementProps {
	room: Room;
}

const RoomListElement: React.FC<RoomListElementProps> = ({ room }) => {
	const { activeRoom, setActiveRoom } = useContext(ConnectionContext)!;

	return (
		<button
			className={`w-full cursor-pointer rounded-lg px-4 py-3 text-left transition bg-white ${
				activeRoom === room.name ? 'bg-opacity-100' : 'bg-opacity-0'
			}`}
			onClick={() => setActiveRoom(room.name)}
		>
			<p className="font-bold truncate">Room: {room.name}</p>
			<p className="truncate">
				{room.messages[room.messages.length - 1].message ?? ''}
			</p>
		</button>
	);
};

export default RoomListElement;
