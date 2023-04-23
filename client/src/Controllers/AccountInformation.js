import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserProfile from "../Components/UserProfile";
import "../css/AccountInfo.css";

const AccountInformation = () => {
    const [orders, setOrders] = useState([]);
    //console.log(orders);
    const navigate = useNavigate();
    const { donateurId } = useSelector((state) => state);

    useEffect(() => {
        if (donateurId === null) {
            navigate("/connexion");
        } else {
            fetch("/getOrders/" + donateurId)
                .then((response) => response.json())
                .then((response) => {
                    setOrders(response);
                    console.log(response);
                });
        }
    }, [donateurId, navigate]);

    return (

        <>
            <section className="container account">
                <div className="userprofile">
                    <h1>Mon compte</h1>
                    <UserProfile />
                </div>
                <div className="commandes">
                    <h2>Mes commandes</h2>
                    <table className="">
                        <thead>
                            <tr>
                                <th>Produit</th>
                                <th>Somme</th>
                                <th>Date de la commande</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, i) => (
                                <tr key={i}>
                                    <td>{order.name}</td>
                                    <td>{order.total} €</td>
                                    <td>{new Date(order.date).toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
};

export default AccountInformation;
