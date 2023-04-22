import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../css/Refuge.css";

const Refuge = () => {

    const { id } = useParams();
    const [refuge, setRefuge] = useState({});
    const [products, setProducts] = useState([]);
    const [message, setMessage] = useState("");
    const [active, setActive] = useState(false);
    const dispatch = useDispatch();

    //console.log(refuge);

    useEffect(() => {

        fetch("/refuge/" + id)
            .then((response) => response.json())
            .then((res) => {
                setRefuge(res);
            });
        fetch("/products")
            .then((response) => response.json())
            .then((res) => {
                setProducts(res)
            });

    }, [id]);

    // ajoute un produit dans le panier
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
        setMessage("L'article est dans le panier !");
    };

    // toggle le message "L'article est dans le panier !"
    const handleClick = (e) => {
        if (e.currentTarget.style = "hidden" && message === "") {
            e.currentTarget.style = "popup";
            setMessage("L'article est dans le panier !")
        } else {
            e.currentTarget.style = "hidden";
            setMessage("")
        };
    };

    return (
        <>

            <section className="container" data-slider="itc-slider">
                {message !== "" && <div className="box_popup">
                    <p className={active ? "hidden" : "popup"}
                        onClick={handleClick}>{message}</p>
                </div>}
                <article>
                    <h3>Refuge <span>"{refuge.name}"</span></h3>
                    <div className="info">
                        {refuge.id === 1 && <img className="info_img" src="/img/background/refuge-cat.jpg" alt="chat" />}
                        {refuge.id === 2 && <img className="info_img" src="/img/background/refuge-dog.jpg" alt="dog" />}
                        {refuge.id === 3 && <img className="info_img" src="/img/background/refuge-poisson.jpg" alt="poisson" />}
                        {refuge.id === 4 && <img className="info_img" src="/img/background/refuge-rongeur.jpg" alt="rongeur" />}
                        <div className="info_text">
                            <p>{refuge.description}</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Aenean ullamcorper elit nec condimentum aliquet. Suspendisse vel justo massa. Integer feugiat ex id
                                tincidunt aliquet. Sed viverra, velit non laoreet viverra, nunc nulla venenatis neque, in fermentum
                                mauris neque non nisi. Sed felis nisl, scelerisque quis ultrices sed, ornare eget justo.
                                Donec consequat, sapien eleifend feugiat egestas, nunc velit tristique ante, nec hendrerit
                                ex nulla quis neque.
                            </p>
                        </div>
                    </div>
                    <div className="animals">
                    </div>
                    <div className="cards">
                        {products.map((prod, i) => (
                            prod.refuge_id === refuge.id && (
                                <div key={i} className="card">
                                    <div className="img_card">
                                        <img src={"/img/" + prod.image} alt={prod.name} />
                                    </div>
                                    <p>{prod.name}</p>
                                    <p>{prod.price}€</p>
                                    <button onClick={addProduct}
                                        data-id={i}
                                        data-name={prod.name}
                                        data-price={prod.price}
                                        className="button">
                                        Ajouter au panier
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                    <div className="itc-slider">
                        <div className="itc-slider__wrapper">
                            <div className="itc-slider__items">
                                <div className="itc-slider__item">
                                    Контент 1 слайда
                                </div>
                                <div className="itc-slider__item">
                                    Контент 2 слайда
                                </div>
                                <div className="itc-slider__item">
                                    Контент 3 слайда
                                </div>
                            </div>
                        </div>
                        {/*  <!-- Кнопки для перехода к предыдущему и следующему слайду --> */}
                        <button className="itc-slider__btn itc-slider__btn_prev"></button>
                        <button className="itc-slider__btn itc-slider__btn_next"></button>
                    </div>
                </article>
            </section>

        </>
    );
};
export default Refuge;