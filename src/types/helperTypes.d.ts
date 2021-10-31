export type FloatingMenuType = FloatingMenuItem[];

type FloatingMenuItem = FloatingMenuTab | 'separator';

export interface FloatingMenuTab {
	label: string;
	callback: (...args: any[]) => any;
}

export type RoomType = 'none' | 'room' | 'settings' | 'main';

export interface RoomTypeHandler {
	type: RoomType;
	setType: (s: RoomType) => void;
}
