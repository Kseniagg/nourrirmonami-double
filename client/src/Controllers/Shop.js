import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import refugesFile from "../utils/refuges.js";
import productsFile from "../utils/products";
import "../css/Shop.css";


const Shop = () => {
    const [refuges, setRefuges] = useState(refugesFile);
    const [products, setProducts] = useState(productsFile);
    const [message, setMessage] = useState("");
    const [active, setActive] = useState(1);
    const [activeMessage, setActiveMessage] = useState(false);
    const dispatch = useDispatch();

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
        setMessage("Vous avez ajouté l'article !");
    };

    /* useEffect(() => {

        fetch("/refuges")
            .then((response) => response.json())
            .then((res) => {
                setRefuges(res);
            })
            .catch(err => console.error(err));;
        fetch("/products")
            .then((response) => response.json())
            .then((res) => {
                setProducts(res);
            })
            .catch(err => console.error(err));;

    }, []) */


    // toggle popup style
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
            <section className="container shop">
                <div className="column-refuges">
                    <h3>Refuge</h3>
                    {refuges.map((ref, i) => (

                        <div className={`${active === ref.id ? "refuge active" : "refuge"}`}
                            key={i}
                            onClick={() => setActive(ref.id)}>
                            <button>{ref.name}</button>
                        </div>))}
                </div>
                {refuges.map((ref, k) => (
                    <div key={k}>
                        {active === ref.id && (
                            <div className="cards">
                                {message !== "" && <p className={activeMessage ? "hidden" : "popup"} onClick={handleClick}>{message}</p>}
                                {products.map((prod, i) => (
                                    prod.refuge_id === ref.id && (

                                        <div key={i} className="card">

                                            {/* <p>{prod.description}</p> */}
                                            <div className="img_card">
                                                <img src={"/img/" + prod.image} alt={prod.name} />
                                            </div>
                                            <p>{prod.name}</p>
                                            <p>{prod.price} €</p>
                                            <button onClick={addProduct}
                                                data-id={i}
                                                data-name={prod.name}
                                                data-price={prod.price}>
                                                Ajouter au panier
                                            </button>

                                        </div>
                                    )))}

                            </div>
                        )}
                    </div>
                ))}
            </section>
        </>
    );
};

export default Shop;