import { ConnectionContext } from 'context/ConnectionContext';
import { WindowContext } from 'context/WindowContext';
import React, { useContext } from 'react';
import { v4 } from 'uuid';
import RoomListElement from './RoomListElement';

interface RoomNavigatorProps {
	filter: string;
	resetFilter: () => void;
}

const RoomNavigator: React.FC<RoomNavigatorProps> = ({
	filter,
	resetFilter,
}) => {
	const { rooms, joinRoom } = useContext(ConnectionContext)!;
	const { setType } = useContext(WindowContext)!;

	return (
		<div>
			<div className="flex items-center text-2xl mb-4 px-4">
				<h2 className="font-bold">Rooms</h2>
			</div>
			<div className="scrollbar-custom pr-4">
				{Array.from(rooms.entries())
					.filter(([name, room]) => name.includes(filter))
					.map(([name, room]) => {
						return (
							<>
								<RoomListElement key={name} room={room} />
								<hr key={v4()} className="my-2" />
							</>
						);
					})}
			</div>
			{!!filter && !Array.from(rooms.entries()).find((x) => x[0] === filter) && (
				<>
					<hr className="my-2" />
					<button
						className="font-bold"
						onClick={() => {
							joinRoom(filter);
							resetFilter();
							setType('room');
						}}
					>
						Join room #{filter}
					</button>
				</>
			)}
		</div>
	);
};

export default RoomNavigator;
