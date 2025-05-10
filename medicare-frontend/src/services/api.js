import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const registerPatient = (data) => API.post("/auth/register", data);
export const loginPatient = (data) => API.post("/auth/login", data);
export const loginDoctor = (data) => API.post("/auth/doctor-login", data);

export const bookAppointment = (data, token) =>
  API.post("/appointment/book", data, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const viewAppointments = (token) =>
  API.get("/appointment/view", {
    headers: { Authorization: `Bearer ${token}` },
  });

export const cancelAppointment = (id, token) =>
  API.delete(`/appointment/cancel/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const listDoctors = (token) =>
  API.get("/appointment/doctors", {
    headers: { Authorization: `Bearer ${token}` },
  });
