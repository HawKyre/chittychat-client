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
			return `Today at ${msgDate.getHours()}:${msgDate
				.getMinutes()
				.toLocaleString('en-US', { minimumIntegerDigits: 2 })}`;
		} else if (isSameDay(yesterday, msgDate)) {
			return `Yesterday at ${msgDate.getHours()}:${msgDate
				.getMinutes()
				.toLocaleString('en-US', { minimumIntegerDigits: 2 })}}`;
		} else {
			return `${msgDate
				.getDay()
				.toLocaleString('en-US', { minimumIntegerDigits: 2 })}}/${msgDate
				.getMonth()
				.toLocaleString('en-US', {
					minimumIntegerDigits: 2,
				})}}/${msgDate.getFullYear()} at ${msgDate.getHours()}:${msgDate
				.getMinutes()
				.toLocaleString('en-US', { minimumIntegerDigits: 2 })}}`;
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
