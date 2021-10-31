import React from 'react';
import { InputProps } from 'react-html-props';

interface Props extends InputProps {
	setValue?: React.Dispatch<React.SetStateAction<string>>;
}

const Input: React.FC<Props> = ({ setValue, ...props }) => {
	return (
		<input
			{...props}
			onChange={(e) => {
				if (setValue) setValue(e.target.value);
				else if (props.onChange) props.onChange(e);
			}}
			type="text"
			placeholder={props.placeholder ?? 'Value...'}
			className={`${props.className} bg-gray-100 rounded-lg p-2 px-4 outline-none`}
		/>
	);
};

export default Input;
