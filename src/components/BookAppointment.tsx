import { useState, useEffect } from "react";
import { bookAppointment } from "../api/patient";
import { uploadToIPFS } from "../api/pinata"; // Import Pinata function
import axios from "axios";

const BookAppointment = () => {
  const [doctors, setDoctors] = useState([]);
  const [doctorId, setDoctorId] = useState("");
  const [details, setDetails] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios.get("http://localhost:5000/doctors").then((res) => setDoctors(res.data));
  }, []);

  const handleAppointment = async () => {
    if (!doctorId || !details) {
      alert("Please select a doctor and provide details.");
      return;
    }
    setLoading(true);

    try {
      let fileUrl = null;
      if (file) {
        fileUrl = await uploadToIPFS(file, token); // Upload file to Pinata
      }

      await bookAppointment({ doctorId, details, fileUrl }, token); // Send file URL with appointment

      alert("Appointment requested successfully!");
    } catch (error) {
      console.error("Booking failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-2xl font-semibold text-blue-600 text-center">Book an Appointment</h3>
      <div className="mb-4">
        <label className="block text-gray-700">Select Doctor</label>
        <select className="w-full p-2 border border-gray-300 rounded mt-1" onChange={(e) => setDoctorId(e.target.value)}>
          <option value="">Select a Doctor</option>
          {doctors.map((doctor) => (
            <option key={doctor._id} value={doctor._id}>
              {doctor.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Appointment Details</label>
        <textarea className="w-full p-2 border border-gray-300 rounded mt-1" placeholder="Describe your symptoms" onChange={(e) => setDetails(e.target.value)} />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Upload File (Optional)</label>
        <input type="file" className="w-full p-2 border border-gray-300 rounded mt-1" onChange={(e) => setFile(e.target.files[0])} />
      </div>
      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition" onClick={handleAppointment} disabled={loading}>
        {loading ? "Booking..." : "Book Appointment"}
      </button>
    </div>
  );
};

export default BookAppointment;
