import { RoomGroup } from 'types/socket';
import RoomChat from './RoomChat';
import RoomNavigator from './RoomNavigator';

interface RoomsProps {
	rooms: RoomGroup;
	sendMessage: (room: string, message: string) => void;
	activeRoom: string;
	setActiveRoom: (value: React.SetStateAction<string>) => void;
}

const Rooms: React.FC<RoomsProps> = ({
	rooms,
	sendMessage,
	activeRoom,
	setActiveRoom,
}) => {
	return (
		<div className="flex flex-row h-screen">
			<RoomNavigator
				rooms={rooms}
				selectRoom={(r: string) => setActiveRoom(r)}
			/>
			<RoomChat
				messages={rooms.get(activeRoom)?.messages ?? []}
				sendMessage={(message: string) => sendMessage(activeRoom, message)}
				roomName={activeRoom}
			/>
		</div>
	);
};

export default Rooms;
