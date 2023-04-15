import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "../css/deconnexion.css";

const Deconnexion = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //const { idDonateur } = useSelector((state) => state);
    //const [message, setMessage] = useState("");


    const logout = () => {
        dispatch({
            type: "DECONNECT_USER",
        });
        navigate("/");
    };



    return (
        <>
            <p className="button-logout" onClick={logout}><i className="fas fa-sign-out-alt"></i></p>
        </>
    );
};


export default Deconnexion;
