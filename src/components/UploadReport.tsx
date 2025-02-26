import { useState } from "react";
import { uploadToIPFS } from "../api/pinata";
import axios from "axios";

const UploadReport = ({ patientId }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("token");

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }
    setLoading(true);

    try {
      const ipfsHash = await uploadToIPFS(file);
      await axios.post(
        `http://localhost:5000/doctor/upload-report`,
        { patientId, reportHash: ipfsHash },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Report uploaded successfully!");
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-4">
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button
        className="ml-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        onClick={handleUpload}
        disabled={loading}
      >
        {loading ? "Uploading..." : "Upload Report"}
      </button>
    </div>
  );
};

export default UploadReport;
