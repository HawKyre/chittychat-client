import { ConnectionContext } from 'context/ConnectionContext';
import { useContext } from 'react';
import RoomChat from './RoomChat';
import RoomNavigator from './RoomNavigator';

interface RoomsProps {}

const Rooms: React.FC<RoomsProps> = () => {
	const { activeRoom } = useContext(ConnectionContext)!;
	return (
		<div className="flex flex-row h-screen w-screen">
			<div className="w-80">
				<RoomNavigator />
			</div>
			<div className="flex-grow">{activeRoom !== '' && <RoomChat />}</div>
		</div>
	);
};

export default Rooms;
