import { useEffect } from 'react';

export const useFocus = (f: (...args: any[]) => any) => {
	useEffect(() => {
		window.addEventListener('focus', f);
		return () => window.removeEventListener('focus', f);
	}, [f]);
};
