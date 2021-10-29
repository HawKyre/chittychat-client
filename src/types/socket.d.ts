import { Socket } from 'socket.io-client';

export interface SocketType {
	rooms: string[];
	joinRoom: (roomName: string) => void;
}

export type RoomGroup = Map<string, Room>;

export interface Room {
	name: string;
	messages: ChatMessage[];
	messageGroups: ChatMessageGroup[];
	pending: number;
}

export interface ChatMessage {
	id: string;
	sender: string;
	message: string;
	date: number;
}

export interface ChatMessageGroup {
	sender: string;
	messages: string[];
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
	newMessageInRoom: boolean;
	leaveRoom: (s?: string) => void;
}
