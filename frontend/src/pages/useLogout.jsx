import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import "../styles/Logout.css"

const useLogout = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(REFRESH_TOKEN);
        navigate("/login");
    };
    

    return logout;
};

export default useLogout;
