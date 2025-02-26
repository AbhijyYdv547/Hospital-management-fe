import axios from "axios";

const PINATA_BASE_URL = "http://localhost:5000/report/upload"; // Correct backend endpoint

export const uploadToIPFS = async (file, token) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const res = await axios.post(PINATA_BASE_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`, // Send the token for authentication
      },
    });
    return res.data.ipfsUrl; // Return the IPFS URL instead of Hash
  } catch (error) {
    console.error("Error uploading to IPFS:", error);
    throw error;
  }
};
