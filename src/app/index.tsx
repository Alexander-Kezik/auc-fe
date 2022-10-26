import React, { FC } from 'react';

import Providers from 'app/Providers';
import Pages from 'pages';
import NavBar from 'shared/ui/NavBar';
import Footer from 'shared/ui/Footer';

const App: FC = () => {
	return (
		<Providers>
			<NavBar />
			<Pages />
			<Footer />
		</Providers>
	);
};

export default App;
