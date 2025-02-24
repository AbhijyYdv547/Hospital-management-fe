import { useState, useEffect } from "react";
import axios from "axios";
import BookAppointment from "./BookAppointment";

const PatientDashboard = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/patient/appointments")
      .then(res => setAppointments(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-3xl font-semibold text-blue-600 text-center">Patient Dashboard</h2>
        <p className="text-gray-600 text-center mb-4">Manage your appointments easily</p>

        <BookAppointment />

        <h3 className="text-2xl font-semibold text-gray-700 mt-6">Your Appointments</h3>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="py-2 px-4 border">Doctor</th>
                <th className="py-2 px-4 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.length > 0 ? (
                appointments.map((appt, index) => (
                  <tr key={index} className="text-center border">
                    <td className="py-2 px-4 border">{appt.doctorId.name}</td>
                    <td className="py-2 px-4 border">{appt.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2" className="py-4 text-gray-500 text-center">No appointments found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
