import { useState } from 'react';
import { io } from 'socket.io-client';
import { Room, RoomGroup } from 'types/socket';

const useSocket = () => {
	const [rooms, setRooms] = useState<RoomGroup>(new Map());
	const [activeRoom, setActiveRoom] = useState('');
	const [insideRoom, setInsideRoom] = useState(false);
	const socket = io('http://localhost:3001');
	const [user, setUser] = useState(`hawk${Math.random()}`);

	socket.on('message', (data) => {
		console.log(data);
		console.log('received msg');

		addMessageToRoom(data.room, data.message);
	});

	function joinRoom(room: string): void {
		console.log('joining room: ', room);

		socket.emit('join-request', {
			user,
			room,
		});

		setRooms((rooms) => {
			const newRoom: Room = {
				name: room,
				messages: [
					{
						date: new Date(Date.now()),
						message: 'Welcome to chat!',
						sender: user,
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
		socket.emit('message', {
			user,
			room,
			message,
		});
		addMessageToRoom(room, message);
	}

	function addMessageToRoom(room: string, message: string) {
		console.log('added msg');

		setRooms((rooms) => {
			const roomObj = rooms.get(room);
			if (!roomObj) return rooms;

			roomObj.messages.push({
				date: new Date(Date.now()),
				message,
				sender: user,
			});

			rooms.set(room, roomObj);
			console.log(rooms);

			return new Map(rooms);
		});
	}

	return {
		joinRoom,
		rooms,
		insideRoom,
		sendMessage,
		activeRoom,
		setActiveRoom,
	};
};

export default useSocket;
