import RoomChat from './RoomChat';
import RoomNavigator from './RoomNavigator';

interface RoomsProps {}

const Rooms: React.FC<RoomsProps> = () => {
	return (
		<div className="flex flex-row h-screen">
			<RoomNavigator />
			<RoomChat />
		</div>
	);
};

export default Rooms;
