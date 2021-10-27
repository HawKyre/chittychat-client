import { useState } from 'react';
import { ChatMessage } from 'types/socket';

interface RoomChatProps {
	sendMessage: (message: string) => void;
	messages: ChatMessage[];
	roomName: string;
}

const RoomChat: React.FC<RoomChatProps> = ({
	messages,
	sendMessage,
	roomName,
}) => {
	const [message, setMessage] = useState('');
	return (
		<div className="flex flex-col items-center h-screen w-full py-4 px-8 gap-y-4">
			<h2 className="text-4xl">{roomName}</h2>
			<div className="flex-grow flex flex-col items-end border rounded p-4 border-black w-full">
				{messages.map((m) => {
					return <p key={m.date.getTime()}>{m.message}</p>;
				})}
			</div>
			<input
				type="text"
				onClick={(e) => {
					sendMessage(e.currentTarget.value);
					setMessage('');
				}}
				placeholder="Message..."
				className="w-full border border-black p-2 text-lg rounded"
				onChange={(e) => {
					setMessage(e.target.value);
				}}
				value={message}
				onKeyPress={(e) => {
					console.log(e.key);

					if (e.key === 'Enter') {
						sendMessage(message);
						setMessage('');
					}
				}}
			/>
		</div>
	);
};

export default RoomChat;
