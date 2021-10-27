import { RoomGroup } from 'types/socket';

interface RoomNavigatorProps {
	rooms: RoomGroup;
	selectRoom: (r: string) => void;
}

const RoomNavigator: React.FC<RoomNavigatorProps> = ({ rooms, selectRoom }) => {
	return (
		<div className="flex-shrink-0 w-48 px-8 py-4 bg-blue-200">
			<h2 className="text-2xl font-bold mb-8">Rooms</h2>
			<div className="flex flex-col gap-y-2">
				{Array.from(rooms.entries()).map(([name]) => {
					return (
						<p
							className="cursor-pointer"
							key={name}
							onClick={() => selectRoom(name)}
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
