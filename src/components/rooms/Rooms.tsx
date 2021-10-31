import { ConnectionContext } from 'context/ConnectionContext';
import React, { useContext, useState } from 'react';
import RoomChat from './RoomChat';
import Navigator from './navigator/Navigator';
import { WindowContext } from 'context/WindowContext';
import { RoomType } from 'types/helperTypes';
import Settings from '@components/settings/Settings';

interface RoomsProps {}

const Rooms: React.FC<RoomsProps> = () => {
	const { activeRoom } = useContext(ConnectionContext)!;
	const [roomType, setRoomType] = useState<RoomType>('room');

	return (
		<WindowContext.Provider
			value={{
				type: roomType,
				setType: (s: RoomType) => {
					setRoomType(s);
				},
			}}
		>
			<div className="flex flex-row h-screen w-screen">
				<div className="w-100">
					<Navigator />
				</div>
				<div className="flex-grow">
					{roomType === 'room' && <RoomChat />}
					{roomType === 'settings' && <Settings />}
				</div>
			</div>
		</WindowContext.Provider>
	);
};

export default Rooms;
