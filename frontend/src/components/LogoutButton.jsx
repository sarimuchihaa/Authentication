import React from "react";
import useLogout from "./useLogout";

const LogoutButton = () => {
    const logout = useLogout();

    const buttonStyle = {
        backgroundColor: '#f44336',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        margin: '10px 2px',
        cursor: 'pointer',
        borderRadius: '4px',
    };

    return (
        <button onClick={logout} style={buttonStyle}>
            Logout
        </button>
    );
};

export default LogoutButton;
