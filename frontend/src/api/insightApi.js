import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
    baseURL: `${BASE_URL}/api/insights`,
    withCredentials: true,
});

export const getInsights = () => api.get("/");