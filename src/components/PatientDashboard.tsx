import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import { getAppointments } from "../api/patient";
import BookAppointment from "./BookAppointment";

const PatientDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    getAppointments(token)
      .then((res) => setAppointments(res.data))
      .catch((err) => console.error("Error fetching appointments:", err));
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear token
    navigate("/login"); // Redirect to login
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-blue-600">Patient Dashboard</h2>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>

      <BookAppointment />

      <h3 className="text-xl font-semibold mt-6">Your Appointments</h3>
      <ul className="mt-4">
        {appointments.length > 0 ? (
          appointments.map((appt) => (
            <li key={appt._id} className="border-b p-2">
              <strong>Doctor:</strong> {appt.doctorId?.name || "Unknown"} - <strong>Status:</strong> {appt.status}
            </li>
          ))
        ) : (
          <p>No appointments found.</p>
        )}
      </ul>
    </div>
  );
};

export default PatientDashboard;
