import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const [message, setMessage] = useState("");
    //les hooks : useSelector permet de lire dans le state global
    const { products, idDonateur } = useSelector((state) => state);

    console.log(products);
    //console.log(idDonateur);

    //const newProduct = state.selectedProduct;

    //useDispatch permettra d'appeler une action du reducer afin d'écrire dans le state global
    const dispatch = useDispatch();
    //useNavigate permettra d'effectuer une redirection
    const navigate = useNavigate();


    const deleteProduct = (e) => {

        dispatch({
            type: "DELETE_PRODUCT",
            prodId: e.currentTarget.dataset.id,
        });
        setMessage("Vous avez bien supprimé l'article !");
    };

    const validOrder = () => {
        //vérifier si l'utilisateur est connecté d'abord
        if (idDonateur === "" || idDonateur == null) {
            //s'il n'est pas connecté , on le redirige vers la page de connexion
            navigate("/connexion");
        } else {
            //envoi de la commande en base de données
            //envoi des données en POST
            let datas = {
                idDonateur: idDonateur,
                products: products,
            };

            let req = new Request("/api/addOrder", {
                method: "POST",
                body: JSON.stringify(datas),
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            });

            fetch(req)
                .then((response) => response.text())
                .then((response) => {
                    //on vide le panier au moment de l'envoi de la commande
                    if (response.error === null) {
                        dispatch({
                            type: "DELETE_ALL",
                        });
                    }
                    // navigate("/moncompte");
                });
        }
    };

    return (
        <>
            <h1>Votre panier</h1>
            {products.map((prod, i) => (
                <article className="panier" key={i}>
                    {/* <img src={"/img/" + prod.image} alt={prod.name} /> */}

                    <h3>{prod.name}</h3>
                    <p>{prod.price}€</p>
                    <p>
                        <button data-id={i} onClick={deleteProduct}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </p>
                </article>
            ))}

            {products.length !== 0 ? (
                <p>
                    <button className="btn" onClick={validOrder}>
                        Valider la commande
                    </button>
                </p>
            ) : (
                <p>Votre panier est vide</p>
            )}
            {/* si il y a un message alors on l'affiche*/}
/* {message !== "" && <p>{message}</p>}
</>
);
};

export default Cart; 