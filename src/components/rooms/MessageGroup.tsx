import { isSameDay } from 'functions/helpers/isSameDay';
import { ChatMessageGroup } from 'types/socket';
import { v4 } from 'uuid';

interface MessageGroupProps {
	message: ChatMessageGroup;
}

const MessageGroup: React.FC<MessageGroupProps> = ({ message: m }) => {
	const getDate = () => {
		const today = new Date(Date.now());
		const yesterday = new Date(Date.now() - 1000 * 60 * 60 * 24);
		const msgDate = new Date(m.date);
		if (isSameDay(today, msgDate)) {
			return `Today at ${msgDate.getHours()}:${msgDate.getMinutes()}`;
		} else if (isSameDay(yesterday, msgDate)) {
			return `Yesterday at ${msgDate.getHours()}:${msgDate.getMinutes()}`;
		} else {
			return `${msgDate.getDay()}/${msgDate.getMonth()}/${msgDate.getFullYear()} at ${msgDate.getHours()}:${msgDate.getMinutes()}`;
		}
	};
	return (
		<div key={m.date}>
			<p>
				<span className="font-bold mr-2">{m.sender}</span>
				<span className="text-sm">{getDate()}</span>
			</p>
			{m.messages.map((message) => {
				return (
					<p key={v4()} className="">
						{message}
					</p>
				);
			})}
		</div>
	);
};

export default MessageGroup;
