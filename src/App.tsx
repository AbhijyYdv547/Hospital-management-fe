import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PatientDashboard from "./components/PatientDashboard";
import DoctorDashboard from "./components/DoctorDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            <Route 
                path="/patient" 
                element={
                    <ProtectedRoute>
                        <PatientDashboard />
                    </ProtectedRoute>
                } 
            />

            <Route 
                path="/doctor" 
                element={
                    <ProtectedRoute>
                        <DoctorDashboard />
                    </ProtectedRoute>
                } 
            />
        </Routes>
    </Router>
);

export default App;
