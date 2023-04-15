import { useState, useEffect } from "react";

const Total = () => {

    const [fund, setFund] = useState([]);
    const [parrain, setParrain] = useState([]);

    useEffect(() => {
        fetch("/fund")
            .then((response) => response.json())
            .then((res) => {
                setFund(res)
            });

        fetch("/parrain")
            .then((response) => response.json())
            .then((res) => {
                setParrain(res)
            });
    }, [])

    return (
        <>
            <section className="total-fond">
                {fund.map((fun, i) => (
                    <div key={i}>
                        <p className="total-figure">{fun.total}</p>
                        <p>fond recueillis</p>
                    </div>
                ))}
                <div>
                    <p className="total-figure">123</p>
                    <p>animaux sont nourris</p>
                </div>
                <div>
                    <p className="total-figure">{parrain.length}</p>
                    <p>nombre de partenaires</p>
                </div>
            </section>
        </>

    );

};

export default Total;