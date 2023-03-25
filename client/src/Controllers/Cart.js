import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const [message, setMessage] = useState("");
    //les hooks : useSelector permet de lire dans le state global
    const { products, idDonateur, totalPrice } = useSelector((state) => state);

    //useDispatch permettra d'appeler une action du reducer afin d'écrire dans le state global
    const dispatch = useDispatch();
    //useNavigate permettra d'effectuer une redirection
    const navigate = useNavigate();

    /* const addQty = (e) => {
        dispatch({
            type: "ADD_QUANTITE",
            prodId: e.currentTarget.dataset.id,
        });
    } */

    const deleteProduct = (e) => {

        dispatch({
            type: "DELETE_PRODUCT",
            prodId: e.currentTarget.dataset.id,
        });
        setMessage("Vous avez bien supprimé l'article !");
    };

    const validOrder = (e) => {
        //vérifier si l'utilisateur est connecté d'abord
        /* if (idDonateur === "" || idDonateur == null) {
            //s'il n'est pas connecté , on le redirige vers la page de connexion
            navigate("/connexion");
        } else { */
        //envoi de la commande en base de données
        //envoi des données en POST
        let data = {
            //idDonateur: idDonateur,
            /*  products: {
                 id: e.currentTarget.dataset.id,
                 price: e.currentTarget.dataset.products.price,
             } */
            products: products,

        };

        let req = new Request("/addOrder",
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                }
            });

        fetch(req)
            .then((response) => response.text())
            .then((response) => {
                //on vide le panier au moment de l'envoi de la commande
                if (response.error === null) {
                    dispatch({
                        type: "DELETE_ALL",
                    });
                    //navigate("/shop");
                } else {
                    console.log(response.error);
                }
            });
        //};
    };

    return (
        <>
            <h1>Votre panier</h1>
            {products.map((prod, i) => (
                <article className="panier" key={i}>
                    {/* <img src={"/img/" + prod.image} alt={prod.name} /> */}

                    <h3>{prod.name}</h3>
                    <p>{prod.price}€</p>
                    {/*  <button data-id={i} onClick={addQty}>Add</button>
 */}
                    <button data-id={i} onClick={deleteProduct}>Delete</button>



                </article>
            ))}
            <p>Total: {totalPrice} €</p>

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
            {message !== "" && <p>{message}</p>}
        </>
    );
};

export default Cart; 