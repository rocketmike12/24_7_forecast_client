import axios from "axios";

export const picturesApi = axios.create({
	baseURL: import.meta.env.VITE_ENV === "dev" ? "/api/v0/pictures" : import.meta.env.VITE_PICTURES_API
});
