import NameChange from '@components/home/NameChange';
import { ConnectionContext } from 'context/ConnectionContext';
import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { ChatMessage, ChatMessageGroup } from 'types/socket';
import MessageGroup from './MessageGroup';

interface RoomChatProps {}

const RoomChat: React.FC<RoomChatProps> = () => {
	const { rooms, sendMessage, activeRoom, setActiveRoom, user, setUser } =
		useContext(ConnectionContext)!;

	const messages = useMemo(() => {
		return rooms.get(activeRoom)?.messageGroups ?? [];
	}, [activeRoom, rooms]);

	const [message, setMessage] = useState('');
	const chatRef = useRef<HTMLDivElement>(null);

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (message !== '' && e.key === 'Enter') {
			sendMessage(activeRoom, message);
			setMessage('');
		}
	};

	useEffect(() => {
		if (chatRef.current) {
			chatRef.current.scrollTop = chatRef.current.scrollHeight;
		}
	}, [messages.length]);

	return (
		<div className="flex flex-col items-center h-screen w-full py-4 px-8 gap-y-4">
			<h2 className="text-4xl">{activeRoom}</h2>
			<div
				ref={chatRef}
				className="flex-grow flex flex-col gap-y-4 items-start border rounded p-4 border-black w-full overflow-y-scroll"
			>
				{messages.map((m) => {
					return <MessageGroup key={m.date} message={m} />;
				})}
			</div>
			<div className="w-full grid grid-cols-5 gap-x-4">
				<NameChange />
				<input
					type="text"
					placeholder="Message..."
					className="col-span-4 w-full flex-grow border border-black p-2 text-lg rounded"
					onChange={(e) => {
						setMessage(e.target.value);
					}}
					value={message}
					onKeyPress={handleKeyPress}
				/>
			</div>
		</div>
	);
};

export default RoomChat;
