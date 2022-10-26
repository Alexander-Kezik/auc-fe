import React, { FC, ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import store from 'shared/store';
import { Provider } from 'react-redux';

interface IProps {
	children: ReactNode;
}

const Providers: FC<IProps> = ({ children }) => {
	return (
		<Provider store={store}>
			<BrowserRouter>{children}</BrowserRouter>
		</Provider>
	);
};

export default Providers;
