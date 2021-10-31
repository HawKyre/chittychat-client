import FontAwesomeButton from '@components/helpers/FontAwesomeButton';
import { faCog, faCogs, faPlus } from '@fortawesome/free-solid-svg-icons';
import { ConnectionContext } from 'context/ConnectionContext';
import { WindowContext } from 'context/WindowContext';
import { useContext } from 'react';

interface ProfileProps {}

const Profile: React.FC<ProfileProps> = () => {
	const { setType } = useContext(WindowContext)!;
	const { setActiveRoom, user } = useContext(ConnectionContext)!;
	return (
		<div className="py-8 px-4 flex flex-row justify-between gap-x-4 border-b-2">
			<p className="truncate">{user}</p>
			<FontAwesomeButton
				icon={faCog}
				onClick={() => {
					setType('settings');
					console.log(setActiveRoom);
					setActiveRoom('');
				}}
			/>
		</div>
	);
};

export default Profile;
