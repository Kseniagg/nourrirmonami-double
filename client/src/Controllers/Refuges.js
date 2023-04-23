import { useState, useEffect } from "react";
import "../css/Refuges.css";

const Refuges = () => {

    const [refuges, setRefuges] = useState([]);

    useEffect(() => {
        fetch("/refuges")
            .then((response) => response.json())
            .then((res) => {
                setRefuges(res)
            })
            .catch(err => console.error(err));;
    }, [])

    return (
        <>
            {refuges.map((ref, i) => (
                <div className="menu" key={i}>
                    <a href={"#" + ref.name} >{ref.name}</a>
                </div>
            ))}
            <section className="container">
                {refuges.map((ref, i) => (
                    <article key={i} className="refuges_article" id={ref.name}>
                        <h2>{ref.name}</h2>
                        <a href={"/refuge/" + ref.id}>En savoir plus</a>
                    </article>


                ))}
            </section>
        </>

    );

};

export default Refuges;