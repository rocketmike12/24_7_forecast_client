import { createContext, useContext, useEffect, useState } from "react";

import axios from "axios";
import { userApi } from "../apis/userApi";

import { LoadingContext } from "./LoadingContext";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
	const { setIsLoginLoading } = useContext(LoadingContext);

	const [isLogin, setIsLogin] = useState(false);
	const [username, setUsername] = useState(null);
	const [favorites, setFavorites] = useState([]);

	const getSession = async function () {
		console.log("getSession");
		try {
			const { data } = await userApi.post("/session", "", { withCredentials: true });
			setIsLogin(true);
			setUsername(data.username);
			setFavorites(data.favorites);

			console.log("getSession try");
		} catch (err) {
			console.log("getSession err");
			if (err.status === 401) {
				setIsLoginLoading(false);
				return;
			}

			// console.error(err);
		}

		setIsLoginLoading(false);
	};

	useEffect(() => {
		getSession();
	}, []);

	return <AuthContext.Provider value={{ isLogin, setIsLogin, username, setUsername, favorites, setFavorites }}>{children}</AuthContext.Provider>;
};
