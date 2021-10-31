import FloatingMenu from '@components/helpers/FloatingMenu';
import FontAwesomeButton from '@components/helpers/FontAwesomeButton';
import { faCog, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { ConnectionContext } from 'context/ConnectionContext';
import { WindowContext } from 'context/WindowContext';
import useComponentVisible from 'hooks/useComponentVisible';
import { useContext, useState } from 'react';
import { FloatingMenuType } from 'types/helperTypes';

interface RoomChatHeaderProps {}

const RoomChatHeader: React.FC<RoomChatHeaderProps> = () => {
	const { leaveRoom } = useContext(ConnectionContext)!;
	const {
		setIsComponentVisible: setShowMenu,
		isComponentVisible: showMenu,
		ref,
	} = useComponentVisible(false);

	const { activeRoom } = useContext(ConnectionContext)!;
	const { setType } = useContext(WindowContext)!;

	const menu: FloatingMenuType = [
		{
			label: 'Leave room',
			callback: () => {
				leaveRoom();
				setShowMenu(false);
				setType('main');
			},
		},
	];

	return (
		<div className="relative px-8 flex flex-row items-center w-full justify-between">
			<h2 className="text-4xl">#{activeRoom}</h2>
			<FontAwesomeButton
				onClick={() => {
					setShowMenu((x) => !x);
				}}
				icon={faEllipsisV}
			/>
			{showMenu && (
				<div ref={ref} className="absolute top-12 right-6">
					<FloatingMenu items={menu} />
				</div>
			)}
		</div>
	);
};

export default RoomChatHeader;
