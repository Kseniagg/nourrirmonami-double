import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "../css/Cart.css";

const Cart = () => {

    const [message, setMessage] = useState("");
    const dispatch = useDispatch();
    //récupére des données dans le state global
    const { products, isLoggedIn, totalPrice } = useSelector((state) => state);

    console.log(isLoggedIn);
    // appelle une action du reducer pour supprimer l'article
    const deleteProduct = (e) => {
        dispatch({
            type: "DELETE_PRODUCT",
            prodId: e.currentTarget.dataset.id,
        });
    };


    // envoie une commande dans une bdd si l'user est connecté
    const validOrder = (e) => {
        if (!isLoggedIn) {
            setMessage("Vous n'etes pas connecté");
        } else {
            const oldOrder = JSON.parse(localStorage.getItem("order")); // нужно соединить новый и предыдущий заказы
            //adds an order in localStorage
            const date = new Date();
            const data = {
                products: products,
                date: date,
            }
            localStorage.setItem("order", JSON.stringify(data));

            dispatch({
                type: "DELETE_ALL",
            });
            setMessage("Votre commande est validé");
        }
    }

    return (
        <>
            <section className="container cart">
                <h1 className="title">Panier</h1>
                <table>
                    <thead>
                        {products.length > 0 && <tr>
                            <th>Article</th>
                            <th>Prix</th>
                            <th></th>
                        </tr>}
                    </thead>
                    <tbody>
                        {products.map((prod, i) => {
                            return (
                                <tr key={i} className="article-item">
                                    <td>{prod.name}</td>
                                    <td>{prod.price} €</td>
                                    <td>
                                        <button data-id={i} onClick={deleteProduct}><i className="fas fa-trash"></i></button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                {/*  <button data-id={i} onClick={addQty}>Add</button>*/}

                <p><strong>Total: </strong>{totalPrice} €</p>
                {products.length !== 0 ? (
                    <p>
                        <button className="button_cart"
                            onClick={validOrder}>
                            Valider la commande
                        </button>
                    </p>
                ) : (
                    <div>
                        <p>Votre panier est vide</p>
                    </div>
                )}
                {message !== "" && <p>{message}</p>}
            </section >
        </>
    );
};

export default Cart; 