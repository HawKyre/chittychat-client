import { ConnectionContext } from 'context/ConnectionContext';
import { useContext } from 'react';
import { RoomGroup } from 'types/socket';
import RoomChat from './RoomChat';
import RoomNavigator from './RoomNavigator';

interface RoomsProps {}

const Rooms: React.FC<RoomsProps> = () => {
	const { rooms, sendMessage, activeRoom, setActiveRoom } =
		useContext(ConnectionContext)!;

	return (
		<div className="flex flex-row h-screen">
			<RoomNavigator />
			<RoomChat />
		</div>
	);
};

export default Rooms;
