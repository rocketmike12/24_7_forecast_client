import axios from "axios";

export const newsApi = axios.create({
	baseURL: import.meta.env.VITE_ENV === "dev" ? "/api/v0/news" : import.meta.env.VITE_NEWS_API,
});
