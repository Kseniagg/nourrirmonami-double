// Ici on part un peu sur le même principe que la page de création du compte
import { useState } from "react";
// on en aura besoin pour récupérer des state
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Connexion = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    //useNavigate permettra d'effectuer une redirection
    const navigate = useNavigate();

    //useDispatch permettra d'appeler une action du reducer afin d'écrire dans le state global
    const dispatch = useDispatch();

    // récupèration des valeur des input
    const changeEmail = (e) => {
        setEmail(e.target.value);
    };

    const changePassword = (e) => {
        setPassword(e.target.value);
    };

    const submit = () => {
        //envoi des données en POST
        let datas = {
            email: email,
            password: password,
        };

        // attention au port que vous utilisez !!
        let req = new Request("/connexion", {
            method: "POST",
            body: JSON.stringify(datas),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });

        fetch(req)
            .then((response) => response.json())
            .then((response) => {
                // reponse générée dans le controller (donc si les identifiants de connexion sont ok)
                // alors on appelle la méthode dispatch
                // du reducer et ensuite récupérer l'id du client pour le connecter
                if (response.reponse) {
                    dispatch({
                        type: "CONNECT_USER",
                        id: response.id,
                    });
                    setMessage("");
                    navigate("/shop");
                    // sinon on envoie un message d'erreur (contenu dans la réponse de la requête)
                } else {
                    setMessage(response.message);
                }
            });
    };

    return (
        <>
            <h1>Connexion</h1>
            {/* message à afficher en cas d'erreur*/}
            <p style={{ color: "red" }}>{message}</p>
            <form>
                <div>
                    <label htmlFor="email">Votre email</label>
                    <input type="email" id="email" value={email} onChange={changeEmail} />
                </div>
                <div>
                    <label htmlFor="password">Votre mot de passe</label>
                    <input type="password" id="password" value={password} onChange={changePassword} />
                </div>
                <button className="btn" type="button" onClick={submit}>
                    Se connecter
                </button>
            </form>
            <p>
                <a href="/createAccount">Je n'ai pas encore de compte</a>
            </p>

        </>
    );
};
export default Connexion;
