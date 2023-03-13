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
            <section>
                {products.map((prod, i) => (
                    <div key={i}>
                        <img src={"/img/" + prod.image} />
                        <p>{prod.name}</p>
                        <a href="#">{prod.refName}</a>
                        <button>Acheter</button>
                    </div>
                ))}
            </section>
        </>
    );



};

export default Minishop;