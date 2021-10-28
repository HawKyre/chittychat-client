import TextModal from '@components/helpers/TextModal';
import { ConnectionContext } from 'context/ConnectionContext';
import { useContext, useState } from 'react';
import RoomListElement from './RoomListElement';

interface RoomNavigatorProps {}

const RoomNavigator: React.FC<RoomNavigatorProps> = ({}) => {
	const { rooms, joinRoom } = useContext(ConnectionContext)!;

	const [showModal, setShowModal] = useState(false);

	const addRoom = () => {
		setShowModal(true);
	};

	return (
		<div className="px-8 py-4 border-r-2 border-gray-600 bg-gray-100 h-screen flex flex-col">
			<div className="flex items-center justify-between text-2xl mb-8">
				<h2 className="font-bold">Rooms</h2>
				<button onClick={addRoom}>+</button>
			</div>
			<div className="scrollbar-custom">
				<div className="mr-4">
					{Array.from(rooms.entries()).map(([name, room]) => {
						return (
							<>
								<RoomListElement key={name} room={room} />
								<hr className="my-2" />
							</>
						);
					})}
				</div>
			</div>
			<TextModal
				hide={() => {
					setShowModal(false);
				}}
				show={showModal}
				onAccept={joinRoom}
				label="Enter the new room's name:"
				placeholder="Room..."
				acceptText="Join"
			/>
		</div>
	);
};

export default RoomNavigator;
