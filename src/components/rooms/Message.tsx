import { ChatMessage } from 'types/socket';

interface MessageProps {
	message: ChatMessage;
}

const Message: React.FC<MessageProps> = ({ message: m }) => {
	return (
		<p key={m.date}>
			<span className="font-bold">{m.sender}</span>: {m.message}
		</p>
	);
};

export default Message;
