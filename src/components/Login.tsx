import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        setError("");

        try {
            const response = await axios.post("http://localhost:5000/auth/login", { email, password });
            const { role, token } = response.data;

            if (!role || !token) {
                throw new Error("Invalid response from server.");
            }

            localStorage.setItem("token", token);
            localStorage.setItem("role", role);

            navigate(role === "doctor" ? "/doctor" : "/patient");
        } catch (error) {
            console.error("Login failed:", error);
            setError("Invalid email or password.");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-center text-blue-600">Login</h2>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <input 
                type="email" 
                placeholder="Email" 
                className="w-full border p-2 mt-2"
                onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="Password" 
                className="w-full border p-2 mt-2"
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button 
                onClick={handleLogin} 
                className="w-full bg-blue-600 text-white py-2 mt-2 rounded hover:bg-blue-700 transition"
            >
                Login
            </button>
        </div>
    );
};

export default Login;
