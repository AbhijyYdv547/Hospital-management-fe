import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for logout
import { getPatients, updateAppointmentStatus } from "../api/doctor"; // Import API functions

const DoctorDashboard = () => {
  const [patients, setPatients] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    fetchPatients();
  }, [token]);

  // Function to fetch patients
  const fetchPatients = () => {
    getPatients(token)
      .then((res) => {
        console.log("Fetched Patients with Reports:", res.data);
        setPatients(res.data);
      })
      .catch((err) => console.error("Error fetching patients:", err));
  };

  // Function to handle status change
  const handleStatusChange = async (appointmentId, newStatus) => {
    try {
      await updateAppointmentStatus(appointmentId, newStatus, token);
      alert("Appointment status updated successfully!");
      fetchPatients(); // Refresh patient data to reflect changes
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Failed to update appointment status.");
    }
  };

  // Logout Function
  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear token
    navigate("/login"); // Redirect to login
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      {/* Header with Logout Button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-blue-600">Doctor Dashboard</h2>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>

      <ul className="mt-4">
        {patients.length > 0 ? (
          patients.map((appointment) => (
            <li key={appointment._id} className="border-b p-2">
              <strong>Patient:</strong> {appointment.patientId?.name || "Unknown"}
              <br />
              <strong>Details:</strong> {appointment.details}
              <br />
              <strong>Status:</strong>{" "}
              <select
                value={appointment.status}
                onChange={(e) => handleStatusChange(appointment._id, e.target.value)}
                className="border rounded px-2 py-1"
              >
                <option value="Pending">Pending</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
              <br />
              <strong>Reports:</strong>
              {appointment.reports && appointment.reports.length > 0 ? (
                <ul className="ml-4">
                  {appointment.reports.map((report) => (
                    <li key={report._id}>
                      <a
                        href={report.ipfsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        View Report ({report.fileHash})
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <span> No reports uploaded</span>
              )}
            </li>
          ))
        ) : (
          <p>No patients found.</p>
        )}
      </ul>
    </div>
  );
};

export default DoctorDashboard;
