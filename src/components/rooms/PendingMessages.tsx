interface PendingMessagesProps {
	count: number;
}

const PendingMessages: React.FC<PendingMessagesProps> = ({ count }) => {
	return (
		<p
			className={`relative bg-brand-200 text-brand-700 px-1 rounded transition ${
				count === 0 ? 'opacity-0' : 'opacity-100'
			}`}
		>
			{count}
		</p>
	);
};

export default PendingMessages;
