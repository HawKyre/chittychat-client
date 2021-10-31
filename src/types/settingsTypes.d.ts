export type SettingsMenu = SettingsSection[];

export interface SettingsSection {
	title: string;
	items: SettingsItem[];
}

export interface SettingsItem {
	label: string;
	value: string;
	setValue: (s: string) => void;
}
