import FloatingMenu from '@components/helpers/FloatingMenu';
import FontAwesomeButton from '@components/helpers/FontAwesomeButton';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { ConnectionContext } from 'context/ConnectionContext';
import { useContext } from 'react';
import { FloatingMenuType } from 'types/helperTypes';

interface RoomChatHeaderProps {}

const RoomChatHeader: React.FC<RoomChatHeaderProps> = () => {
	const { leaveRoom } = useContext(ConnectionContext)!;
	const menu: FloatingMenuType = [{ label: 'Leave room', callback: leaveRoom }];
	const { activeRoom } = useContext(ConnectionContext)!;
	return (
		<div className="relative px-8 flex flex-row items-center w-full justify-between">
			<h2 className="text-4xl">{activeRoom}</h2>
			<FontAwesomeButton onClick={() => {}} icon={faCog} size="lg" />
			<div className="absolute top-12 right-6">
				<FloatingMenu items={menu} />
			</div>
		</div>
	);
};

export default RoomChatHeader;
