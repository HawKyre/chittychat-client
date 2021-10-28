import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import {
	ChatConnection,
	ChatMessage,
	ChatMessageGroup,
	Room,
	RoomGroup,
} from 'types/socket';

function canBeGrouped(groups: ChatMessageGroup[], msg: ChatMessage) {
	if (groups.length === 0) {
		return false;
	}
	const lastMsg = groups[groups.length - 1];
	if (msg.sender !== lastMsg.sender) {
		return false;
	}
	if (msg.date - lastMsg.date > 1000 * 60 * 5) {
		return false;
	}

	return true;
}

const useSocket = (): ChatConnection => {
	const [rooms, setRooms] = useState<RoomGroup>(new Map());
	const [activeRoom, setActiveRoom] = useState('');
	const [insideRoom, setInsideRoom] = useState(false);
	const [socket, setSocket] = useState<Socket>();
	const [user, setUser] = useState(`You`);

	useEffect(() => {
		console.log('in useEffect');

		if (socket?.connected)
			return () => {
				socket?.close();
			};

		const s = io('http://localhost:3001');
		s.on('message', (data) => {
			console.log(data);
			console.log('received msg');
			addMessageToRoom(data.room, data.message);
		});
		setSocket(s);

		return () => {
			socket?.close();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function joinRoom(room: string): void {
		console.log('joining room: ', room);

		socket?.emit('join-request', {
			user,
			room,
		});

		setRooms((rooms) => {
			const newRoom: Room = {
				name: room,
				messages: [
					{
						date: Date.now(),
						message: 'Welcome to chat!',
						sender: 'Server',
					},
				],
				messageGroups: [
					{
						date: Date.now(),
						messages: ['Welcome to chat!'],
						sender: 'Server',
					},
				],
			};
			rooms.set(room, newRoom);
			return new Map(rooms);
		});

		setActiveRoom(room);
		setInsideRoom(true);
	}

	function sendMessage(room: string, message: string) {
		socket?.emit('message', {
			room,
			message: {
				message,
				date: Date.now(),
				sender: user,
			} as ChatMessage,
		});

		addMessageToRoom(room, {
			date: Date.now(),
			message,
			sender: user,
		});
	}

	function addMessageToRoom(room: string, message: ChatMessage) {
		console.log(`Adding msg ${message.message}`);

		setRooms((rs) => {
			const roomObj = rs.get(room);
			if (!roomObj) return rs;

			if (roomObj.messages.find((m) => m.date === message.date)) {
				return rs;
			}

			roomObj.messages.push(message);

			if (canBeGrouped(roomObj.messageGroups, message)) {
				roomObj.messageGroups[roomObj.messageGroups.length - 1].messages.push(
					message.message,
				);
				roomObj.messageGroups[roomObj.messageGroups.length - 1].date =
					message.date;
			} else {
				roomObj.messageGroups.push({
					date: message.date,
					messages: [message.message],
					sender: message.sender,
				});
			}
			return new Map(rs);
		});
	}

	return {
		joinRoom,
		rooms,
		insideRoom,
		sendMessage,
		activeRoom,
		setActiveRoom,
		user,
		setUser,
	};
};

export default useSocket;
