import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Deconnexion = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // appelle une action du reducer et redirige vers le page d'accueil
    const logout = () => {
        dispatch({
            type: "DECONNECT_USER",
        });
        navigate("/");
    };

    return (
        <>
            <button className="button-logout"
                onClick={logout}>
                <i className="fas fa-sign-out-alt">
                </i>
            </button>
        </>
    );
};

export default Deconnexion;
