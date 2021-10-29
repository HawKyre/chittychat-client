export type FloatingMenuType = FloatingMenuItem[];

type FloatingMenuItem = FloatingMenuTab | 'separator';

export interface FloatingMenuTab {
	label: string;
	callback: (...args: any[]) => any;
}
