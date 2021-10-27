import type { NextPage } from 'next';
import React from 'react';
import Home from '@components/home/Home';
import Rooms from '@components/rooms/Rooms';
import useSocket from 'hooks/useSocket';
import { ConnectionContext } from 'context/ConnectionContext';

const Root: NextPage = () => {
	const socket = useSocket();

	return (
		<div className="">
			<ConnectionContext.Provider value={socket}>
				{!socket.insideRoom && <Home />}
				{socket.insideRoom && <Rooms />}
			</ConnectionContext.Provider>
		</div>
	);
};

export default Root;
