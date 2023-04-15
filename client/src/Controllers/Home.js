import Minishop from "../Components/Minishop";
import Total from "../Components/Total";
import Nav from "../Components/Nav";
import "../css/common.css";
import "../css/home.css";


const Home = () => {
    return (
        <>
            <section className="container">
                <div className="home">
                    <div className="home_text">
                        <p>nouveaté</p>
                        <p>Préparez votre venue</p>
                        <p>(accès, horaires, services...)</p>
                    </div>
                </div>
                <Minishop />
                <Total />
            </section>
        </>
    )

}

export default Home;

