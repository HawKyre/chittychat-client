import Modal from '@components/helpers/Modal';
import TextModal from '@components/helpers/TextModal';
import { ConnectionContext } from 'context/ConnectionContext';
import { useContext, useState } from 'react';
import { RoomGroup } from 'types/socket';
import RoomListElement from './RoomListElement';

interface RoomNavigatorProps {}

const RoomNavigator: React.FC<RoomNavigatorProps> = ({}) => {
	const { rooms, joinRoom } = useContext(ConnectionContext)!;

	const [showModal, setShowModal] = useState(false);

	const addRoom = () => {
		setShowModal(true);
	};

	return (
		<div className="flex-shrink-0 w-80 px-8 py-4 shadow-lg">
			<div className="flex items-center justify-between text-2xl mb-8">
				<h2 className="font-bold">Rooms</h2>
				<button onClick={addRoom}>+</button>
			</div>
			<div className="flex flex-col">
				{Array.from(rooms.entries()).map(([name, room]) => {
					return (
						<>
							<RoomListElement key={name} room={room} />
							<hr />
						</>
					);
				})}
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
