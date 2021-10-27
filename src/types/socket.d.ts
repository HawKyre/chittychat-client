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
