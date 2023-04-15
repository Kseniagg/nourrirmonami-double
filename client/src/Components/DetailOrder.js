import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailOrder = () => {

    const { id } = useParams();
    const [details, setDetails] = useState({});

    useEffect(() => {
        fetch('/getOrders/' + id)
            .then(response => response.json())
            .then(response => {
                setDetails(response);
            })
    }, [id])

    return (
        <>
            <div>

                <h3>Commande n° {details.id}</h3>
                {/*  {details.map((detail, i) => {
                return (
                    <>
                        {/* <p>{detail.nom} - {detail.cond} - {detail.price.toFixed(2)} €</p> */}
                {/*   <p>{details.name}</p>
                    </>
                )
            })} 
 */}
            </div>
        </>
    )
}


export default DetailOrder;