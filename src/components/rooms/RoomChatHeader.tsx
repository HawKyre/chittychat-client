import FloatingMenu from '@components/helpers/FloatingMenu';
import FontAwesomeButton from '@components/helpers/FontAwesomeButton';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { ConnectionContext } from 'context/ConnectionContext';
import { useContext, useState } from 'react';
import { FloatingMenuType } from 'types/helperTypes';

interface RoomChatHeaderProps {}

const RoomChatHeader: React.FC<RoomChatHeaderProps> = () => {
	const { leaveRoom } = useContext(ConnectionContext)!;
	const [showMenu, setShowMenu] = useState(false);

	const menu: FloatingMenuType = [
		{
			label: 'Leave room',
			callback: () => {
				leaveRoom();
				setShowMenu(false);
			},
		},
	];
	const { activeRoom } = useContext(ConnectionContext)!;

	return (
		<div className="relative px-8 flex flex-row items-center w-full justify-between">
			<h2 className="text-4xl">{activeRoom}</h2>
			<FontAwesomeButton
				onClick={() => {
					setShowMenu((x) => !x);
				}}
				icon={faCog}
				size="lg"
			/>
			{showMenu && (
				<div className="absolute top-12 right-6">
					<FloatingMenu items={menu} />
				</div>
			)}
		</div>
	);
};

export default RoomChatHeader;
