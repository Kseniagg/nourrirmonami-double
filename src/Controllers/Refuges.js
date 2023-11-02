import { useState } from "react";
import refugesFile from "../utils/refuges.js";
import "../css/Refuges.css";

const Refuges = () => {

    const [refuges, setRefuges] = useState(refugesFile);

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