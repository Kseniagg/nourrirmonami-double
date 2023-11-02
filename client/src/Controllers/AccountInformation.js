import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import UserProfile from "../Components/UserProfile";
import "../css/AccountInfo.css";

const AccountInformation = () => {
    //get an order from localStorage
    const [orders, setOrders] = useState(JSON.parse(localStorage.getItem("order")));
    // const [orders, setOrders] = useState([]);
    //console.log(orders);
    const navigate = useNavigate();
    const { isLoggedIn } = useSelector((state) => state);
    console.log(orders)


    // check if user is logged in
    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/connexion");
        }
    },
        [isLoggedIn, navigate]);

    /*   useEffect(() => {
          if (donateurId === null) {
              navigate("/connexion");
          } else {
              console.log(orders);
              /* fetch("/getOrders/" + donateurId)
                  .then((response) => response.json())
                  .then((response) => {
                      setOrders(response);
                      console.log(response);
                  }); */
    /*    }
    }, [donateurId, navigate]); */

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
                                    <td>{order.price} €</td>
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
