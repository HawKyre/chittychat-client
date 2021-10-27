import { ConnectionContext } from 'context/ConnectionContext';
import { useContext } from 'react';
import { RoomGroup } from 'types/socket';

interface RoomNavigatorProps {}

const RoomNavigator: React.FC<RoomNavigatorProps> = ({}) => {
	const { rooms, setActiveRoom } = useContext(ConnectionContext)!;

	return (
		<div className="flex-shrink-0 w-48 px-8 py-4 bg-blue-200">
			<h2 className="text-2xl font-bold mb-8">Rooms</h2>
			<div className="flex flex-col gap-y-2">
				{Array.from(rooms.entries()).map(([name]) => {
					return (
						<p
							className="cursor-pointer"
							key={name}
							onClick={() => setActiveRoom(name)}
						>
							{name}
						</p>
					);
				})}
			</div>
		</div>
	);
};

export default RoomNavigator;
