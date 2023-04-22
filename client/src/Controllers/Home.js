import Minishop from "../Components/Minishop";
import Total from "../Components/Total";
import "../css/Home.css";


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

