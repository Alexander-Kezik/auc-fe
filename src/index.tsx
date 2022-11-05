import React from 'react';
import ReactDOM from 'react-dom/client';

import App from 'app';
import Providers from 'app/Providers';

import 'app/styles/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<React.StrictMode>
		<Providers>
			<App />
		</Providers>
	</React.StrictMode>
);
