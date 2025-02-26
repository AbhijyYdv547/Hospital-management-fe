import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const signup = (userData) => API.post("/auth/signup", userData);
export const login = (userData) => API.post("/auth/login", userData);
