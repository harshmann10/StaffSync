import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
    baseURL: `${BASE_URL}/api/employees`,
    withCredentials: true,
});

export const getAllEmployees = () => api.get("/");
export const getEmployeeById = (id) => api.get(`/${id}`);
export const createEmployee = (data) => api.post("/", data);
export const updateEmployee = (id, data) => api.patch(`/${id}`, data);
export const deleteEmployee = (id) => api.delete(`/${id}`);