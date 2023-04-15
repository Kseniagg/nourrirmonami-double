// c'EST CE FORMULAIRE QUI PERMET DE MODIFIER L'UTILISATEUR
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


const UserDashboard = () => {
    //les states pour gérer le formulaire
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //un state pour gérer l'état du formulaire (disabled ou non)
    const [inactive, setInactive] = useState(true);

    //les données issues du state global
    const { idDonateur } = useSelector((state) => state);

    //au chargement du composant, on va chercher les informations qui concernent l'utilisateur

    useEffect(() => {
        {
            fetch("/getUser/" + idDonateur)
                .then((response) => response.json())
                .then((response) => {
                    setNom(response.nom);
                    setPrenom(response.prenom);
                    setEmail(response.email);
                })
        };
    }, [idDonateur]);


    //fonction permettant la modification des valeurs contenues dans le formulaire
    const handleChange = (e) => {
        switch (e.target.id) {
            case "nom":
                setNom(e.target.value);
                break;
            case "prenom":
                setPrenom(e.target.value);
                break;
            case "email":
                setEmail(e.target.value);
                break;
            case "password":
                setPassword(e.target.value);
                break;
            default:
        }
    };

    //envoi des modifications de données utilisateur
    const modifier = () => {
        setInactive(!inactive);

        if (inactive === false) {
            //on envoie les modifications en bdd
            //envoi des données en POST
            let datas = {
                nom: nom,
                prenom: prenom,
                email: email,
                password: password,
                id: idDonateur,
            };

            let req = new Request("/updateUser", {
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
                    setMessage("Les modifications ont bien été prises en compte");
                });
        }
    };

    const supprimer = () => {

        let data = {
            idDonateur: idDonateur
        }
        let req = new Request("/deleteAccount",
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                }
            });

        fetch(req)
            .then((response) => response.json()
           /*  {
                if (!response.ok) {
                    throw new Error("Error occured")
                }
                return response.json()
            } */)
            .then((event) => {

                dispatch({
                    type: "DECONNECT_USER",
                });
                event.preventDefault();
            })
            .catch((err) => {
                console.log(err)
            })
        /* .then((response) => {
            setMessage("Vous avez supprimé le compte");
            dispatch({
                type: "DECONNECT_USER",
            }); */
        //navigate("/");
        //});
    }

    return (
        <form>
            <div>
                <label htmlFor="nom">Nom</label>
                <input
                    type="text"
                    id="nom"
                    value={nom}
                    disabled={inactive}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="prenom">Prénom</label>
                <input
                    type="text"
                    id="prenom"
                    value={prenom}
                    disabled={inactive}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    disabled={inactive}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label htmlFor="password">Votre mot de passe</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handleChange}
                />
            </div>
            {/* si il y a un message alors on l'affiche*/}
            {message !== "" && <p>{message}</p>}
            <div>
                <button type="button" onClick={modifier}>
                    {inactive === true ? "Modifier" : "Valider les modifications"}
                </button>
                <button onClick={supprimer}>Supprimer le compte</button>
            </div>
        </form>
    );
};

export default UserDashboard;
