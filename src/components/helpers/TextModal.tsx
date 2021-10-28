import { useState } from 'react';
import Modal from './Modal';

interface TextModalProps {
	show: boolean;
	label?: string;
	placeholder?: string;
	acceptText?: string;
	onAccept: (s: string) => void;
	onCancel?: () => void;
	hide: VoidFunction;
}

const TextModal: React.FC<TextModalProps> = ({
	onAccept,
	onCancel,
	show,
	placeholder,
	label,
	hide,
	acceptText,
}) => {
	const [value, setValue] = useState('');
	return (
		<Modal show={show}>
			<div className="bg-white p-8 flex flex-col gap-y-4 rounded-xl">
				<p className="text-3xl font-bold">{label ?? 'Enter the value:'}</p>
				<input
					type="text"
					value={value}
					placeholder={placeholder ?? 'Value...'}
					onChange={(e) => {
						setValue(e.target.value);
					}}
					onKeyPress={(e) => {
						if (value !== '' && e.key === 'Enter') {
							onAccept(value);
							setValue('');
							hide();
						}
					}}
					className="bg-gray-100 rounded-lg p-2 px-4 w-full"
				/>
				<div className="flex flex-row gap-x-4 justify-center w-full">
					<button
						disabled={value === ''}
						onClick={() => {
							onAccept(value);
							setValue('');
							hide();
						}}
						className="p-2 px-4 bg-green-200 rounded text-green-700"
					>
						{acceptText ?? 'Accept'}
					</button>
					<button
						onClick={() => {
							if (onCancel) onCancel();
							setValue('');
							hide();
						}}
						className="p-2 px-4 bg-red-200 rounded text-red-700"
					>
						Cancel
					</button>
				</div>
			</div>
		</Modal>
	);
};

export default TextModal;
