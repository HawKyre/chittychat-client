import { FloatingMenuType } from 'types/helperTypes';
import { v4 } from 'uuid';

interface FloatingMenuProps {
	items: FloatingMenuType;
}

const FloatingMenu: React.FC<FloatingMenuProps> = ({ items }) => {
	return (
		<div className="p-2 rounded bg-white shadow">
			{items.map((i) => {
				if (i === 'separator') return <hr key={v4()} />;
				else {
					return (
						<button
							key={i.label}
							onClick={i.callback}
							className="p-2 px-4 hover:bg-gray-100 rounded"
						>
							{i.label}
						</button>
					);
				}
			})}
		</div>
	);
};

export default FloatingMenu;
