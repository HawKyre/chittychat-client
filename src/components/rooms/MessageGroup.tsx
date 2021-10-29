import { getFormattedDate } from 'functions/helpers/getFormattedDate';
import { isSameDay } from 'functions/helpers/isSameDay';
import { ChatMessageGroup } from 'types/socket';
import { v4 } from 'uuid';

interface MessageGroupProps {
	message: ChatMessageGroup;
}

const MessageGroup: React.FC<MessageGroupProps> = ({ message: m }) => {
	return (
		<div key={m.date} className="w-full">
			<p>
				<span className="font-bold mr-2">{m.sender}</span>
				<span className="text-sm">{getFormattedDate(new Date(m.date))}</span>
			</p>
			<div className="flex flex-col gap-y-1 overflow-x-hidden">
				{m.messages.map((message) => {
					return (
						<p key={v4()} className="break-anywhere">
							{message}
						</p>
					);
				})}
			</div>
		</div>
	);
};

export default MessageGroup;
