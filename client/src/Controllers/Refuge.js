import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Refuge = () => {

    const { id } = useParams();
    const [refuge, setRefuge] = useState({});
    const [products, setProducts] = useState([]);

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

    }, [id])

    return (
        <>
            <section>
                <h3>Refuge</h3>

                <div>
                    <h2>{refuge.name}</h2>
                    <h2>Id: {refuge.id}</h2>
                </div>
                {products.map((prod, i) => (
                    prod.refuge_id === refuge.id && (
                        <div key={i} >
                            <p>{prod.name}</p>
                            <p>Refuge: {prod.refuge_id}</p>
                            <button>Acheter</button>
                        </div>
                    ))
                )}
            </section>

        </>
    );
};
export default Refuge;