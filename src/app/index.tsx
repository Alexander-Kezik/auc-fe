import React, { FC, useEffect, useState } from 'react';

import Pages from 'pages';
import NavBar from 'shared/ui/Navbar';
import Footer from 'shared/ui/Footer';
import { useAppDispatch } from 'shared/hooks/reduxAppHooks';
import { verifyToken } from 'shared/store/slices/authSlice/thunks';
import LoadingScreen from 'shared/ui/LoadingScreen';
import { fetchCategories } from 'shared/store/slices/categoriesSlice/thunks';

const App: FC = () => {
	const dispatch = useAppDispatch();
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		(async function () {
			await dispatch(verifyToken());
			await dispatch(fetchCategories());
			setIsLoaded(true);
		})();
	}, []);

	return (
		<>
			{isLoaded ? (
				<>
					<NavBar />
					<Pages />
					<Footer />
				</>
			) : (
				<LoadingScreen />
			)}
		</>
	);
};

export default App;
