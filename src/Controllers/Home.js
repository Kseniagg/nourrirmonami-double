import { useState } from "react";
import Minishop from "../Components/Minishop";
import Total from "../Components/Total";
import "../css/Home.css";


const Home = () => {

    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const moveBackground = (e) => {
        const offsetX = (e.clientX / window.innerWidth * 50) - 25;
        const offsetY = (e.clientY / window.innerHeight * 30) - 15;
        setOffset({ x: offsetX, y: offsetY });
    };

    return (
        <>
            <div className="menu">
                <a href="#main-section">Main</a>
                <a href="#minishop-section">Minishop</a>
                <a href="#total-section">Total</a>
            </div>
            <section className="container main_section" id="main-section">
                <article className="main">
                    <div className="parallax background-animals"
                        onMouseMove={moveBackground}></div>
                    <div className="parallax background-bones"
                        style={{ backgroundPosition: `${offset.x}px ${offset.y}px` }}
                    ></div>
                    <div className="main_text">
                        <p>nouveauté</p>
                        <p>Préparez votre venue</p>
                        <p>(accès, horaires, services...)</p>
                    </div>
                </article>
                <Minishop />
                <Total />
            </section >
        </>
    )
}

export default Home;

