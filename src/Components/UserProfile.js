import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";


const UserProfile = () => {
    const savedUser = JSON.parse(localStorage.getItem("user"))
    const savedUserEmail = savedUser.email;
    const savedUserPassword = savedUser.password;
    const savedUserLastName = savedUser.lastName;
    const savedUserFirstName = savedUser.firstName;

    const [email, setEmail] = useState(savedUserEmail);
    const [password, setPassword] = useState(savedUserPassword);
    const [lastName, setLastName] = useState(savedUserLastName);
    const [firstName, setFirstName] = useState(savedUserFirstName);
    const [message, setMessage] = useState("");

    console.log(savedUserLastName, savedUserFirstName)




    //variable pour gérer le formulaire 
    // const [inactive, setInactive] = useState(true);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    /*  //récupére les données dans le state
     const { donateurId } = useSelector((state) => state);
 
     useEffect(() => {
         if (donateurId === null) {
             navigate("/connexion");
         } else {
             fetch("/getDonateur/" + donateurId)
                 .then((response) => response.json())
                 .then((response) => {
                     setLastName(response.lastName);
                     setFirstName(response.firstName);
                     setEmail(response.email);
                 });
         }
     }, [donateurId]); */


    //modifie le data d'utilisateur
    const handleChange = (e) => {
        switch (e.target.id) {
            case "lastName":
                setLastName(e.target.value);
                break;
            case "firstName":
                setFirstName(e.target.value);
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

    // envoie des modifications
    /*  const modifier = () => {
         //active le button 
         setInactive(!inactive);
 
         if (inactive === false) {
             let datas = {
                 lastName: lastName,
                 firstName: firstName,
                 email: email,
                 password: password,
             }; */

    /*  let req = new Request("/updateDonateur", {
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
             setMessage("L'information est modifiée");
         })
 } */
    // };
    // supprime l'utilisateur dans une bdd
    const supprimer = () => {
        /* let data = {
            donateurId: donateurId
        } */
        /* let req = new Request("/deleteDonateur",
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                }
            });

        fetch(req)
            .then((response) => response.json())
            .then((response) => {
                dispatch({
                    type: "DECONNECT_USER",
                });
                navigate("/");
            })
            .catch((err) => {
                console.log(err)
            }) */
    }

    return (
        <>
            <form>
                <div className="input-box">
                    <label htmlFor="lastName">Nom</label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        /* disabled={inactive} */
                        onChange={handleChange}
                    />
                </div>

                <div className="input-box">
                    <label htmlFor="firstName">Prénom</label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        /* disabled={inactive} */
                        onChange={handleChange}
                    />
                </div>

                <div className="input-box">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        /*  disabled={inactive} */
                        onChange={handleChange}
                    />
                </div>

                <div className="input-box">
                    <label htmlFor="password">Mot de passe</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handleChange}
                    />
                </div>
                {message !== "" && <p style={{ "color": "#2E76E4" }}>{message}</p>}
                <div className="button-box">
                    <button type="button" /* onClick={modifier} */>
                        {/*   {inactive === true ? "Modifier" : "Valider"} */}
                    </button>
                    <button onClick={supprimer}>Supprimer le compte</button>
                </div>
            </form>
        </>
    );
};

export default UserProfile;
