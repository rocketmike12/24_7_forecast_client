import axios from "axios";

export const weatherApi = axios.create({
	baseURL: import.meta.env.VITE_ENV === "dev" ? "/api/v0/weather" : import.meta.env.VITE_WEATHER_API,
});
