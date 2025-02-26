import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        const role = localStorage.getItem("role");

        if (!role) {
            navigate("/login", { replace: true });
        } else if (role === "doctor" && location.pathname.startsWith("/patient")) {
            navigate("/doctor", { replace: true });
        } else if (role === "patient" && location.pathname.startsWith("/doctor")) {
            navigate("/patient", { replace: true });
        } else {
            setIsAuthorized(true);
        }
    }, [navigate, location.pathname]);

    return isAuthorized ? children : null;
};

export default ProtectedRoute;
