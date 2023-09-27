import { useSelector } from "react-redux";
import Deconnexion from "../Components/Deconnexion"

const Nav = () => {
    const { donateurId } = useSelector((state) => state);
    const { products } = useSelector((state) => state);
    return (
        <>
            <div className="nav">
                <a className="nav link" href="/">Accueil</a>
                <a className="nav link" href="/refuges">Refuges</a>
                <a className="nav link" href="/shop">Produits</a>
                {!donateurId && <a className="nav link" href="/connexion">Me connecter</a>}
                <div className="nav icons">
                    {donateurId && <a href="/moncompte"><i className="fas fa-user"></i></a>}
                    <a href="/cart"><i className="fas fa-shopping-cart">{products.length > 0 && (<span> {products.length}</span>)}</i></a>
                    {donateurId && <Deconnexion />}
                </div>
            </div>

        </>

    )
}

export default Nav;