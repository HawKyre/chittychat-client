import RoomChat from './RoomChat';
import RoomNavigator from './RoomNavigator';

interface RoomsProps {}

const Rooms: React.FC<RoomsProps> = () => {
	return (
		<div className="grid grid-cols-12 h-screen">
			<div className="col-span-2">
				<RoomNavigator />
			</div>
			<div className="col-span-10">
				<RoomChat />
			</div>
		</div>
	);
};

export default Rooms;
