import { useState, useEffect } from "react";
import axios from "axios";

const BookAppointment = () => {
  const [doctors, setDoctors] = useState([]);
  const [doctorId, setDoctorId] = useState("");
  const [details, setDetails] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/doctors")
      .then(res => setDoctors(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleAppointment = () => {
    if (!doctorId || !details) {
      alert("Please select a doctor and provide details");
      return;
    }
    axios.post("http://localhost:5000/patient/book", { doctorId, details })
      .then(() => alert("Appointment requested successfully"))
      .catch(err => console.error(err));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-2xl font-semibold text-blue-600 text-center">Book an Appointment</h3>
      <p className="text-gray-600 text-center mb-4">Choose a doctor and describe your issue</p>
      <div className="mb-4">
        <label className="block text-gray-700">Select Doctor</label>
        <select 
          className="w-full p-2 border border-gray-300 rounded mt-1" 
          onChange={(e) => setDoctorId(e.target.value)}
        >
          <option value="">Select a Doctor</option>
          {doctors.map((doctor) => (
            <option key={doctor._id} value={doctor._id}>{doctor.name}</option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Appointment Details</label>
        <textarea 
          className="w-full p-2 border border-gray-300 rounded mt-1"
          placeholder="Describe your symptoms or request"
          onChange={(e) => setDetails(e.target.value)}
        />
      </div>
      <button 
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        onClick={handleAppointment}
      >
        Book Appointment
      </button>
    </div>
  );
};

export default BookAppointment;
