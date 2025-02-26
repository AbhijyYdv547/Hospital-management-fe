import axios from "axios";

export const updateAppointmentStatus = async (appointmentId, status, token) => {
  await axios.put(
    `http://localhost:5000/doctor/appointments/${appointmentId}`,
    { status },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export const getPatients = async (token) => {
  return await axios.get("http://localhost:5000/doctor/patients", {
    headers: { Authorization: `Bearer ${token}` },
  });
};
