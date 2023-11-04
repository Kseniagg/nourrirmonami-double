import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserProfile from "../Components/UserProfile";
import "../css/AccountInfo.css";

const AccountInformation = () => {

    const navigate = useNavigate();
    const { isLoggedIn } = useSelector((state) => state);

    //get the order and date from localStorage
    const getData = JSON.parse(localStorage.getItem("order"));

    const getOrder = getData?.products;
    //console.log(getOrder)
    const orders = [];
    for (const i in getOrder) {
        orders.push(getOrder[i]);
    }

    const date = getData?.date;

    // check if user is logged in
    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/connexion");
        }
    },
        [isLoggedIn, navigate]);


    return (

        <>
            <section className="container account">
                <div className="userprofile">
                    <h1>Mon compte</h1>
                    <UserProfile />
                </div>
                <div className="commandes">
                    <h2>Mes commandes</h2>

                    {orders.length !== 0 ? (<table className="">
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
                                    <td>{order.price} €</td>
                                    {/* для преобразования даты используем этот метод */}
                                    <td>{new Date(date).toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    ) : (<p>Vous n'avez pas encore de commandes </p>)}

                </div>
            </section>
        </>
    );
};

export default AccountInformation;
