import { useState, useEffect } from "react";

const Minishop = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/randomProduct")
            .then((response) => response.json())
            .then((res) => {
                setProducts(res)
            });
    }, [])

    return (
        <>
            <section className="cards">
                {products.map((prod, i) => (
                    <div className="card" key={i}>
                        <div className="img_card"><img className="img" src={"/img/" + prod.image} /></div>
                        <p>{prod.name}</p>
                        <a href="#">{prod.refName}</a>
                        <button className="button">Acheter</button>
                    </div>
                ))}
            </section>
        </>
    );



};

export default Minishop;