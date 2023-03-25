import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Deconnexion = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [message, setMessage] = useState("");

    const logout = () => {
        dispatch({
            type: "DECONNECT_USER",
        });

        navigate("/");
    };

    return (
        <>
            <button onClick={logout}>Deconnecter</button>

        </>
    );
};


export default Deconnexion;
