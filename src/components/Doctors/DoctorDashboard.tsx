import { useState, useEffect } from "react";
import axios from "axios";

const DoctorDashboard = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/doctor/patients")
      .then(res => setPatients(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-3xl font-semibold text-blue-600 text-center">Doctor Dashboard</h2>
        <p className="text-gray-600 text-center mb-4">View and manage your patients</p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="py-2 px-4 border">Patient Name</th>
                <th className="py-2 px-4 border">Email</th>
                <th className="py-2 px-4 border">Condition</th>
              </tr>
            </thead>
            <tbody>
              {patients.length > 0 ? (
                patients.map((patient, index) => (
                  <tr key={index} className="text-center border">
                    <td className="py-2 px-4 border">{patient.name}</td>
                    <td className="py-2 px-4 border">{patient.email}</td>
                    <td className="py-2 px-4 border">{patient.condition}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="py-4 text-gray-500 text-center">No patients found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
