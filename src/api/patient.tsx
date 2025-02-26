import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const getAppointments = (token) => API.get("/patient/appointments", {
  headers: { Authorization: `Bearer ${token}` },
});

export const bookAppointment = (data, token) => API.post("/patient/book", data, {
  headers: { Authorization: `Bearer ${token}` },
});
