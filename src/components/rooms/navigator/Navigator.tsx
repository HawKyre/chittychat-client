import TextModal from '@components/helpers/TextModal';
import { ConnectionContext } from 'context/ConnectionContext';
import React, { useContext, useMemo, useRef, useState } from 'react';
import Profile from './Profile';
import RoomListElement from './RoomListElement';
import RoomNavigator from './RoomNavigator';
import RoomSearch from './RoomSearch';

const Navigator: React.VFC = () => {
	const { joinRoom } = useContext(ConnectionContext)!;

	const [showModal, setShowModal] = useState(false);
	const [roomFilter, setRoomFilter] = useState('');

	const addRoom = () => {
		setShowModal(true);
	};

	return (
		<div className="px-8 border-r-2 border-gray-600 bg-gray-100 h-screen flex flex-col gap-y-8">
			<Profile />
			<RoomSearch value={roomFilter} setValue={setRoomFilter} />
			<RoomNavigator
				filter={roomFilter}
				resetFilter={() => setRoomFilter('')}
			/>
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

export default Navigator;
