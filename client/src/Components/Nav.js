import { useSelector } from "react-redux";
import { useState } from "react";
import Deconnexion from "../Controllers/Deconnexion"

const Nav = () => {
    const { idDonateur } = useSelector((state) => state);
    return (
        <>

            <div className="nav">
                <a href="/">Accueil</a>
                <a href="/refuges">Refuges</a>
                <a href="/shop">Produits</a>
                {!idDonateur && <a href="/connexion">Connexion</a>}
                <a href="/cart">Panier</a>
                {idDonateur && <a href="/moncompte">Mon compte</a>}
                {idDonateur && <Deconnexion />}
            </div>

        </>

    )
}

export default Nav;