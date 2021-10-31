import React from 'react';
import { RoomTypeHandler } from 'types/helperTypes';

export const WindowContext = React.createContext<RoomTypeHandler>({
	type: 'none',
	setType: () => {},
});
