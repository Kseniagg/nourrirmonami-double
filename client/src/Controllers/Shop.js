import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/common.css";
import "../css/shop.css";


const Shop = () => {
    const [refuges, setRefuges] = useState([]);
    const [products, setProducts] = useState([]);
    const [active, setActive] = useState([]);
    const [message, setMessage] = useState("");
    const [onglet, setOnglet] = useState(1);
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
            <section className="container general">
                <div className="tabs-refuges">
                    <h3>Refuge</h3>
                    {refuges.map((ref, i) => (


                        <div className="refuge"
                            key={i}
                            onClick={() => setOnglet(ref.id)}>


                            <p>{ref.name}</p>

                        </div>))}
                </div>
                {/* {ref === active && (
                                <div className={`${active === ref ? "nav-item active" : "nav-item"}`}> */}
                {refuges.map((ref, i) => (
                    <div >
                        {onglet === ref.id && (
                            <div className="products">
                                {message !== "" && <p>{message}</p>}
                                {products.map((prod, i) => (
                                    prod.refuge_id === ref.id && (

                                        <div key={i} className={"tabs-content"}>
                                            <p>{prod.name}</p>
                                            <p>Refuge: {prod.refuge_id}</p>
                                            <img className="img_products" src={"/img/" + prod.image} />
                                            <p>{prod.price} €</p>
                                            <button onClick={addProduct} data-id={i} data-name={prod.name} data-price={prod.price}>Ajouter au panier</button>

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