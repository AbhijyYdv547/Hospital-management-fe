import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../api/auth";

const Signup = () => {
    const [form, setForm] = useState({ name: "", email: "", password: "", role: "patient" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSignup = async () => {
        setError("");

        if (!form.name || !form.email || !form.password) {
            setError("All fields are required.");
            return;
        }

        try {
            await signup(form);
            navigate("/login");
        } catch (error) {
            console.error("Signup failed:", error);
            setError("Signup failed. Try again.");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-center text-blue-600">Sign Up</h2>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <input 
                className="w-full border p-2 mt-2" 
                placeholder="Name" 
                onChange={(e) => setForm({ ...form, name: e.target.value })} 
            />
            <input 
                className="w-full border p-2 mt-2" 
                placeholder="Email" 
                onChange={(e) => setForm({ ...form, email: e.target.value })} 
            />
            <input 
                className="w-full border p-2 mt-2" 
                type="password" 
                placeholder="Password" 
                onChange={(e) => setForm({ ...form, password: e.target.value })} 
            />
            <select 
                className="w-full border p-2 mt-2" 
                onChange={(e) => setForm({ ...form, role: e.target.value })}
            >
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
            </select>
            <button 
                className="w-full bg-blue-600 text-white p-2 mt-2 rounded hover:bg-blue-700 transition" 
                onClick={handleSignup}
            >
                Sign Up
            </button>
        </div>
    );
};

export default Signup;
