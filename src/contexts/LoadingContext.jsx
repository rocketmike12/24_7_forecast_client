import { createContext, useEffect, useState } from "react";

import axios from "axios";
import { userApi } from "../apis/userApi";

export const LoadingContext = createContext(null);

export const LoadingProvider = ({ children }) => {
	const [isLoginLoading, setIsLoginLoading] = useState(true);
	const [isWeatherLoading, setIsWeatherLoading] = useState(true);
	const [isNewsLoading, setIsNewsLoading] = useState(true);
	const [isPicturesLoading, setIsPicturesLoading] = useState(true);

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(isLoginLoading || isWeatherLoading || isNewsLoading || isPicturesLoading);
	}, [isLoginLoading, isWeatherLoading, isNewsLoading, isPicturesLoading]);

	return <LoadingContext.Provider value={{ setIsLoginLoading, setIsWeatherLoading, setIsNewsLoading, setIsPicturesLoading, isLoading }}>{children}</LoadingContext.Provider>;
};
