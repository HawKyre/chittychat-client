import { ChatMessage } from 'types/socket';
import { isSameDay } from './isSameDay';

export const getFormattedDate = (date: Date) => {
	const today = new Date(Date.now());
	const yesterday = new Date(Date.now() - 1000 * 60 * 60 * 24);

	if (isSameDay(today, date)) {
		return `Today at ${date.getHours()}:${date
			.getMinutes()
			.toLocaleString('en-US', { minimumIntegerDigits: 2 })}`;
	} else if (isSameDay(yesterday, date)) {
		return `Yesterday at ${date.getHours()}:${date
			.getMinutes()
			.toLocaleString('en-US', { minimumIntegerDigits: 2 })}}`;
	} else {
		return `${date
			.getDay()
			.toLocaleString('en-US', { minimumIntegerDigits: 2 })}}/${date
			.getMonth()
			.toLocaleString('en-US', {
				minimumIntegerDigits: 2,
			})}}/${date.getFullYear()} at ${date.getHours()}:${date
			.getMinutes()
			.toLocaleString('en-US', { minimumIntegerDigits: 2 })}}`;
	}
};
