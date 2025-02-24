import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import PatientDashboard from "./components/Patients/PatientDashboard";
import DoctorDashboard from "./components/Doctors/DoctorDashboard";

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/patient" element={<PatientDashboard />} />
            <Route path="/doctor" element={<DoctorDashboard />} />
        </Routes>
    </Router>
);

export default App;
