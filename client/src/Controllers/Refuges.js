import { useState, useEffect } from "react";

const Refuges = () => {

    const [refuges, setRefuges] = useState([]);

    useEffect(() => {
        fetch("/refuges")
            .then((response) => response.json())
            .then((res) => {
                setRefuges(res)
            });
    }, [])

    return (
        <>

            <section>
                {refuges.map((ref, i) => (
                    <div key={i}>
                        <h2>{ref.name}</h2>
                        <a href={"/refuge/" + ref.id}>Lire plus</a>
                    </div>


                ))}
            </section>
        </>

    );

};

export default Refuges;