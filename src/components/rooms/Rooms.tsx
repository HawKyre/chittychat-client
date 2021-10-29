import RoomChat from './RoomChat';
import RoomNavigator from './RoomNavigator';

interface RoomsProps {}

const Rooms: React.FC<RoomsProps> = () => {
	return (
		<div className="flex flex-row h-screen w-screen">
			<div className="w-80">
				<RoomNavigator />
			</div>
			<div className="flex-grow">
				<RoomChat />
			</div>
		</div>
	);
};

export default Rooms;
