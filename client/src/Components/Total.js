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
            <div>
                {fund.map((fun, i) => (
                    <div key={i}>
                        <p>Fond recueillis: {fun.total}</p>
                    </div>
                ))}
            </div>

            <div>
                <p>Nombre de partenaires: {parrain.length} </p>
            </div>
        </>

    );

};

export default Total;