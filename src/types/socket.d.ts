import { Socket } from 'socket.io-client';

export interface SocketType {
	rooms: string[];
	joinRoom: (roomName: string) => void;
}

export type RoomGroup = Map<string, Room>;

export interface Room {
	name: string;
	messages: ChatMessage[];
}

export interface ChatMessage {
	sender: string;
	message: string;
	date: number;
}

export interface ChatConnection {
	joinRoom: (room: string) => void;
	rooms: RoomGroup;
	insideRoom: boolean;
	sendMessage: (room: string, message: string) => void;
	activeRoom: string;
	setActiveRoom: Dispatch<SetStateAction<string>>;
	user: string;
	setUser: Dispatch<SetStateAction<string>>;
}
