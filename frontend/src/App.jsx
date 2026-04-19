import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import ProtectedRoute from "./utils/ProtectedRoute";

const App = () => {
	return (
		<div className='bg-white/10 h-screen w-full text-4xl'>
			<Routes>
				<Route
					path='/'
					element={
						<ProtectedRoute path='/dashboard'>
							<Home />
						</ProtectedRoute>
					}
				/>

				<Route path='/login' element={<LoginPage />} />
			</Routes>
		</div>
	);
};

export default App;
