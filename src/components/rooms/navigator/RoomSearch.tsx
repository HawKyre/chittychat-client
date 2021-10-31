import Input from '@components/helpers/Input';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

interface RoomSearchProps {
	value: string;
	setValue: React.Dispatch<React.SetStateAction<string>>;
}

const RoomSearch: React.FC<RoomSearchProps> = ({ setValue, value }) => {
	return (
		<div className="w-full relative">
			<Input
				value={value}
				setValue={setValue}
				placeholder="Search for any room..."
				className="bg-gray-200 w-full pr-10"
			></Input>
			<FontAwesomeIcon
				icon={faSearch}
				className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 fill-current"
			/>
		</div>
	);
};

export default RoomSearch;
