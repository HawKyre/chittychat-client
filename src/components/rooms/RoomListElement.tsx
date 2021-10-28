import { ConnectionContext } from 'context/ConnectionContext';
import { useContext } from 'react';
import { Room } from 'types/socket';

interface RoomListElementProps {
	room: Room;
}

const RoomListElement: React.FC<RoomListElementProps> = ({ room }) => {
	const { setActiveRoom } = useContext(ConnectionContext)!;

	return (
		<button
			className="cursor-pointer rounded-lg p-4 text-left"
			onClick={() => setActiveRoom(room.name)}
		>
			<p className="font-bold">Room: {room.name}</p>
			<p>{room.messages[room.messages.length - 1].message ?? ''}</p>
		</button>
	);
};

export default RoomListElement;
