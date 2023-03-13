import { useState, useEffect } from "react";
import "../css/shop.css";


const Shop = () => {

    const [refuges, setRefuges] = useState([]);
    const [products, setProducts] = useState([]);

    //const types = ["shop-1", "shop-2", "shop-3", "shop-4"];
    const [active, setActive] = useState([]);
    //const [activeprod, setActiveprod] = useState();

    //console.log(refuges);

    useEffect(() => {

        fetch("/refuges")
            .then((response) => response.json())
            .then((res) => {
                setRefuges(res);
            });
        fetch("/products")
            .then((response) => response.json())
            .then((res) => {
                setProducts(res)
            });

    }, [])


    return (
        <>
            <section >
                <div classname="tabs">
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
                                                <button>Acheter</button>
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