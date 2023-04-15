import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserInformations from "../Components/UserInformations";
import DetailOrder from "../Components/DetailOrder";
import { useParams } from "react-router-dom";
import "../css/common.css";

const Dashboard = () => {
    const [orders, setOrders] = useState([]);
    /*  const { id } = useParams(); */
    // console.log(id);
    //const [idOrder, setIdOrder] = useState(0);

    const navigate = useNavigate();
    const { idDonateur } = useSelector((state) => state);



    useEffect(() => {
        if (idDonateur === null) {
            navigate("/connexion");
        } else {
            fetch("/getOrders/" + idDonateur)
                .then((response) => response.json())
                .then((response) => {
                    setOrders(response);
                    console.log(response);
                });
        }
    }, [idDonateur, navigate]);


    //console.log(orders);

    return (

        <>
            <section className="container">
                <h1 className="account-title">Mon compte</h1>

                <h2 className="infos-title">Mes informations</h2>
                <UserInformations />

                <h2 className="orders-title">Mes commandes</h2>
                <div className="flex">
                    <table className="commande">
                        <thead>
                            <tr>
                                <th>Numéro de commande</th>
                                <th>Date de la commande</th>
                                <th>Montant de la commande</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{order.id}</td>
                                        <td>{new Date(order.date).toLocaleString()}</td>
                                        {/* <td>{order.price.toFixed(2)} €</td> */}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    {/* < DetailOrder /> */}
                    {/*<table className="commande">
                        <thead>
                            <tr>
                                <th>Numéro de commande</th>
                                <th>Date de la commande</th>
                                <th>Montant de la commande</th>
                                <th></th>
                            </tr>
                        </thead> */}
                    {/*  <tbody> */}
                    {/* orders.map((order, i) => {
                        return (
                            <tr key={i}>
                                <td>User :{idDonateur}</td>
                                {/* <td>{new Date(order.date).toLocaleDateString()}</td> */}
                    {/* <td>{order.total.toFixed(2)} €</td> */}
                    {/* <td>Price: {order.price}</td>
                                <td>{new Date(order.date).toLocaleDateString()}</td>
                            </tr>
                        );
                   })  */}

                    {/*   </tbody>
                    </table> */}
                    {/*  {id !== 0 && <DetailOrder id={id} />} */}
                </div>
            </section>
        </>
    );
};

export default Dashboard;
