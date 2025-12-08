import axios from "axios";

export const userApi = axios.create({
	baseURL: import.meta.env.VITE_ENV === "dev" ? "/api/v0" : import.meta.env.VITE_USERS_API
});

