import { useSelector } from "react-redux";
import Deconnexion from "../Components/Deconnexion"

const Nav = () => {
    //const { donateurId } = useSelector((state) => state);
    const { products, isLoggedIn } = useSelector((state) => state);
    return (
        <>
            <div className="nav">
                <a className="nav link" href="/">Accueil</a>
                <a className="nav link" href="/refuges">Refuges</a>
                <a className="nav link" href="/shop">Produits</a>
                {!isLoggedIn && <a className="nav link" href="/connexion">Me connecter</a>}
                <div className="nav icons">
                    {isLoggedIn && <a href="/moncompte"><i className="fas fa-user"></i></a>}
                    <a href="/cart"><i className="fas fa-shopping-cart">{products.length > 0 && (<span> {products.length}</span>)}</i></a>
                    {isLoggedIn && <Deconnexion />}
                </div>
            </div>

        </>

    )
}

export default Nav;