import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const Minishop = () => {

    const [products, setProducts] = useState([]);
    const [message, setMessage] = useState("");
    const [active, setActive] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch("/randomProduct")
            .then((response) => response.json())
            .then((res) => {
                setProducts(res)
            })
            .catch(err => console.error(err));
    }, [])

    const addProduct = (e) => {
        dispatch({
            type: "ADD_PRODUCT",
            products:
            {
                id: e.currentTarget.dataset.id,
                name: e.currentTarget.dataset.name,
                price: e.currentTarget.dataset.price,
            }
        });
        setMessage("L'article est dans le panier");
    };

    // toggle pour le message
    const handleClick = (e) => {
        if (e.currentTarget.style = "hidden" && message === "") {
            e.currentTarget.style = "popup";
            setMessage("Vous avez ajouté l'article !")
        } else {
            e.currentTarget.style = "hidden";
            setMessage("")
        };
    };

    return (
        <>
            <section className="cards" id="minishop-section">
                {message !== "" && <p className={active ? "hidden" : "popup"} onClick={handleClick}>{message}</p>}
                {products.map((prod, i) => (
                    <div className="card" key={i}>
                        <div className="img_card">
                            <img className="img" src={"/img/" + prod.image} alt={prod.name} />
                        </div>
                        <p>{prod.name}</p>
                        <a href="#">{prod.refName}</a>
                        <button onClick={addProduct}
                            data-id={i}
                            data-name={prod.name}
                            data-price={prod.price}
                            className="button">
                            Ajouter au panier
                        </button>
                    </div>
                ))}
            </section >
        </>
    );



};

export default Minishop;