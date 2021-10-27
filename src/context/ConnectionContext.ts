import React from 'react';
import { ChatConnection } from 'types/socket';

export const ConnectionContext = React.createContext<
	ChatConnection | undefined
>(undefined);
