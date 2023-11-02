import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/CreateAccount.css"

const CreateAccount = () => {

    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    //desactive la création du compte avec un email ou un password vides
    const isSubmittable = () => (email && password ? true : false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        switch (e.target.name) {
            //console.log(e.target.id);
            case 'lastName':
                setLastName(e.target.value);
                break;
            case 'firstName':
                setFirstName(e.target.value);
                break;
            case 'email':
                setEmail(e.target.value);
                break;
            case 'password':
                setPassword(e.target.value);
                break;
            default:
        }
    }

    const submit = () => {
        let datas = {
            lastName: lastName,
            firstName: firstName,
            email: email,
            password: password
        };

        localStorage.setItem("user", JSON.stringify(datas));
        navigate("/connexion");



        /*  let req = new Request("/createAccount",
             {
                 method: "POST",
                 body: JSON.stringify(datas),
                 headers: {
                     Accept: "application/json",
                     "Content-Type": "application/json",
                 }
             });
 
         fetch(req)
             .then((response) => response.json())
             .then((response) => {
                 if (response.message === "") {
                     setLastName("");
                     setFirstName("");
                     setEmail("");
                     setPassword("");
                     navigate("/connexion");
                 } else {
                     setMessage(response.message);
                 }
             }) */
    }

    return (
        <>
            <section className="container new-account">
                <div className="form_section">
                    <h1 className="form_title">Créer un compte</h1>
                    {message !== "" && <p>{message}</p>}
                    <form>
                        <div className="input-box">
                            <label htmlFor="lastName">Nom</label>
                            <input type="text" name="lastName" value={lastName} onChange={handleChange} />
                        </div>
                        <div className="input-box">
                            <label htmlFor="firstName">Prénom</label>
                            <input type="text" name="firstName" value={firstName} onChange={handleChange} />
                        </div>
                        <div className="input-box">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" value={email} onChange={handleChange} pattern=".+@globex\.com" required />
                        </div>
                        <div className="input-box">
                            <label htmlFor="password">Mot de passe</label>
                            <input type="password" name="password" value={password} onChange={handleChange} inputMode="numeric" minLength="4"
                                maxLength="8" required />
                        </div>
                        <button className="button" disabled={!isSubmittable()} type="button" onClick={submit} >
                            Créer un compte
                        </button>
                    </form>
                    <p>
                        <a className="link" href="/connexion">J'ai déjà un compte</a>
                    </p>
                </div>
            </section>
        </>
    );
};

export default CreateAccount;
