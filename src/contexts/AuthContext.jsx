import { createContext, useEffect, useState } from "react";

import axios from "axios";
import { userApi } from "../apis/userApi";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
	const [isLogin, setIsLogin] = useState(false);
	const [username, setUsername] = useState(null);
	const [favorites, setFavorites] = useState([]);

	const getSession = async function () {
		try {
			const { data } = await userApi.post("/auth/session", "", { withCredentials: true });
			setIsLogin(true);
			setUsername(data.username);
			setFavorites(data.favorites);
		} catch (err) {
			if (err.status === 401) return;

			console.error(err);
		}
	};

	useEffect(() => {
		getSession();
	}, []);

	return <AuthContext.Provider value={{ isLogin, setIsLogin, username, setUsername, favorites, setFavorites }}>{children}</AuthContext.Provider>;
};
