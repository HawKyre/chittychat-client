import type { NextPage } from 'next';
import React from 'react';
import Home from '@components/home/Home';
import Rooms from '@components/rooms/Rooms';
import useSocket from 'hooks/useSocket';

const Root: NextPage = () => {
	const socket = useSocket();

	return (
		<div className="">
			{!socket.insideRoom && <Home joinRoom={socket.joinRoom} />}
			{socket.insideRoom && (
				<Rooms
					rooms={socket.rooms}
					sendMessage={socket.sendMessage}
					activeRoom={socket.activeRoom}
					setActiveRoom={socket.setActiveRoom}
				/>
			)}
		</div>
	);
};

export default Root;
