import Input from '@components/helpers/Input';
import { ConnectionContext } from 'context/ConnectionContext';
import { useContext, useState } from 'react';
import { SettingsMenu } from 'types/settingsTypes';
import { v4 } from 'uuid';

interface SettingsProps {}

const Settings: React.FC<SettingsProps> = () => {
	const { setUser } = useContext(ConnectionContext)!;
	const [settingsForm, setSettingsForm] = useState<Record<string, string>>({});
	const settings: SettingsMenu = [
		{
			title: 'User settings',
			items: [
				{
					label: 'Username:',
					value: 'username',
					setValue: (v: string) => {
						setSettingsForm((s) => {
							s['username'] = v;
							return { ...s };
						});
						setUser(v);
					},
				},
			],
		},
	];
	return (
		<div className="flex flex-col h-screen w-full py-4 px-8 gap-y-4">
			<h1 className="w-full text-4xl flex justify-center">Settings</h1>
			<hr className="w-full" />
			{settings.map((ss) => {
				return (
					<div className="" key={ss.title}>
						<h2 className="text-2xl font-bold mb-4">{ss.title}</h2>
						<div className="">
							{ss.items.map((i) => {
								return (
									<div key={`${i.value}top`} className="grid grid-cols-6">
										<label htmlFor="">{i.label}</label>
										<Input
											key={i.value}
											value={settingsForm[i.value]}
											onChange={(e) => i.setValue(e.target.value)}
										/>
									</div>
								);
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Settings;
