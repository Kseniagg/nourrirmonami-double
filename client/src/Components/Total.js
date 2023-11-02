import { useState } from "react";

const Total = () => {

    const [fund, setFund] = useState([]);
    const [donateur, setDonateur] = useState([]);

    /* useEffect(() => {
        fetch("/fund")
            .then((response) => response.json())
            .then((res) => {
                setFund(res)
            })
            .catch(err => console.error(err));;

        fetch("/parrain")
            .then((response) => response.json())
            .then((res) => {
                setDonateur(res)
            })
            .catch(err => console.error(err));;
    }, []) */

    return (
        <>
            <section className="total-fond" id="total-section">
                {fund.map((fun, i) => (
                    <div key={i}>
                        <p className="total-figure">123</p>
                        <p>fond recueillis</p>
                    </div>
                ))}
                <div>
                    <p className="total-figure">123</p>
                    <p>animaux sont nourris</p>
                </div>
                <div>
                    <p className="total-figure">86</p>
                    <p>nombre de donateurs</p>
                </div>
            </section>
        </>

    );

};

export default Total;