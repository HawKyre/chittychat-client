import Input from '@components/helpers/Input';
import NameChange from '@components/home/NameChange';
import { ConnectionContext } from 'context/ConnectionContext';
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { ChatMessage, ChatMessageGroup } from 'types/socket';
import MessageGroup from './MessageGroup';
import RoomChatHeader from './RoomChatHeader';

interface RoomChatProps {}

const RoomChat: React.FC<RoomChatProps> = () => {
	const { rooms, sendMessage, activeRoom, newMessageInRoom } =
		useContext(ConnectionContext)!;

	const messages = useMemo(() => {
		return rooms.get(activeRoom)?.messageGroups ?? [];
	}, [activeRoom, rooms]);

	useEffect(() => {
		scrollDown();
	}, [newMessageInRoom]);

	const [message, setMessage] = useState('');
	const chatRef = useRef<HTMLDivElement>(null);

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (message !== '' && e.key === 'Enter') {
			sendMessage(activeRoom, message);
			setMessage('');
		}
	};

	const scrollDown = () => {
		if (chatRef.current) {
			chatRef.current.scrollTop = chatRef.current.scrollHeight;
		}
	};

	return (
		<div className="flex flex-col items-center h-screen w-full py-4 px-8 gap-y-4">
			<RoomChatHeader />
			<hr className="w-full" />
			<div
				ref={chatRef}
				className="flex-grow flex flex-col gap-y-4 items-start rounded p-4 pb-0 w-full scrollbar-custom"
			>
				{messages.map((m) => {
					return <MessageGroup key={m.date} message={m} />;
				})}
			</div>
			<div className="w-full gap-x-4">
				<Input
					className="w-full"
					placeholder="Message..."
					setValue={setMessage}
					value={message}
					onKeyPress={handleKeyPress}
				/>
			</div>
		</div>
	);
};

export default RoomChat;
