import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import apiClient from "./apiClient";

const ProtectedRoute = ({ children }) => {
	const [user, setUser] = useState(null);
	const [authenticated, setAuthenticated] = useState(false);
	const [loading, setLoading] = useState(true);

	const checkAuth = async () => {
		try {
			const res = await apiClient.get("/user/auth/me", {
				withCredentials: true,
			});
			console.log(res.data);
			setUser(res.data.user);
			setAuthenticated(true);
		} catch (error) {
			setAuthenticated(false);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		checkAuth();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (!authenticated) {
		return <Navigate to='/login' replace />;
	}

	return children;
};

export default ProtectedRoute;
