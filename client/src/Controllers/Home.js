import Minishop from "../Components/Minishop";
import Total from "../Components/Total";
import "../css/Home.css";


const Home = () => {
    return (
        <>
            <div className="menu">
                <a href="#main-section">Main</a>
                <a href="#minishop-section">Minishop</a>
                <a href="#total-section">Total</a>
            </div>
            <section className="container main_section" id="main-section">
                <article className="main">
                    <div className="main_text">
                        <p>nouveauté</p>
                        <p>Préparez votre venue</p>
                        <p>(accès, horaires, services...)</p>
                    </div>
                </article>
                <Minishop />
                <Total />
            </section>
        </>
    )
}

export default Home;

