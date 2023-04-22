import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserInformations from "../Components/UserInformations";

const Dashboard = () => {
    const [orders, setOrders] = useState([]);
    //console.log(orders);
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
                </div>
            </section>
        </>
    );
};

export default Dashboard;
