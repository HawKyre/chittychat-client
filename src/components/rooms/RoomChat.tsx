import { ConnectionContext } from 'context/ConnectionContext';
import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { ChatMessage } from 'types/socket';
import Message from './Message';

interface RoomChatProps {}

const RoomChat: React.FC<RoomChatProps> = () => {
	const { rooms, sendMessage, activeRoom, setActiveRoom, user, setUser } =
		useContext(ConnectionContext)!;

	const messages = useMemo(() => {
		return rooms.get(activeRoom)?.messages ?? [];
	}, [activeRoom, rooms]);

	const [message, setMessage] = useState('');
	const chatRef = useRef<HTMLDivElement>(null);

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
				className="flex-grow flex flex-col gap-y-3 items-start border rounded p-4 border-black w-full overflow-y-scroll"
			>
				{messages.map((m) => {
					return <Message key={m.date} message={m} />;
				})}
			</div>
			<div className="w-full grid grid-cols-5 gap-x-4">
				<input
					type="text"
					placeholder="Username..."
					className="col-span-1	w-full border border-black p-2 text-lg rounded"
					onChange={(e) => {
						setUser(e.target.value);
					}}
					value={user}
				/>
				<input
					type="text"
					placeholder="Message..."
					className="col-span-4 w-full flex-grow border border-black p-2 text-lg rounded"
					onChange={(e) => {
						setMessage(e.target.value);
					}}
					value={message}
					onKeyPress={(e) => {
						console.log(e.key);

						if (e.key === 'Enter') {
							sendMessage(activeRoom, message);
							setMessage('');
						}
					}}
				/>
			</div>
		</div>
	);
};

export default RoomChat;
