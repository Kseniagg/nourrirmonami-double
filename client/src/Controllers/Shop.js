import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/shop.css";


const Shop = () => {
    const [refuges, setRefuges] = useState([]);
    const [products, setProducts] = useState([]);
    const [active, setActive] = useState([]);
    const [message, setMessage] = useState("");
    //const { totalPanier } = useSelector(state => state);
    const dispatch = useDispatch();

    const { panier } = useSelector(state => state);
    //const { products } = useSelector(state => state);


    const addProduct = (e) => {
        dispatch({
            type: "ADD_PRODUCT",
            products:
            {
                type: "ADD_PRODUCT",
                prodId: e.currentTarget.dataset.id,
                name: e.currentTarget.dataset.name,
                price: e.currentTarget.dataset.price,
            }
        });
        setMessage("Vous avez ajouté l'article !");
    };

    useEffect(() => {

        fetch("/refuges")
            .then((response) => response.json())
            .then((res) => {
                setRefuges(res);
            });
        fetch("/products")
            .then((response) => response.json())
            .then((res) => {
                setProducts(res);
            });

    }, [])


    return (
        <>
            <section >
                <div className="tabs">
                    <h3>Refuge</h3>
                    {refuges.map((ref, i) => (

                        <div className={`${active === ref ? "nav-item active" : "nav-item"}`}
                            key={i}
                            onClick={() => { setActive(ref) }}
                        >

                            <div className="refuge">
                                <p>{ref.name}</p>
                            </div>

                            {ref === active && (
                                <div className="products">

                                    <p>Products :</p>

                                    {products.map((prod, i) => (
                                        prod.refuge_id === ref.id && (

                                            <div key={i} className={"tabs-content"}>
                                                <p>{prod.name}</p>
                                                <p>Refuge: {prod.refuge_id}</p>
                                                <p>{prod.price} €</p>
                                                <button onClick={addProduct} data-id={i} data-name={prod.name} data-price={prod.price}>Ajouter au panier</button>
                                                {message !== "" && <p>{message}</p>}
                                            </div>

                                        )))}


                                </div>
                            )}

                        </div>
                    ))};
                </div>
            </section>


        </>
    );
};

export default Shop;