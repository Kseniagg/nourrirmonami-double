import { useSelector } from "react-redux";
import Deconnexion from "../Components/Deconnexion"

const Nav = () => {
    const { donateurId } = useSelector((state) => state);
    return (
        <>
            <div className="nav">
                <a href="/">Accueil</a>
                <a href="/refuges">Refuges</a>
                <a href="/shop">Produits</a>
                {!donateurId && <a href="/connexion">Me connecter</a>}
                <a href="/cart">Panier</a>
                {donateurId && <a href="/moncompte">Mon compte</a>}
                {donateurId && <Deconnexion />}
            </div>

        </>

    )
}

export default Nav;