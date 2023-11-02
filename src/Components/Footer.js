const Footer = () => {

    return (
        <>
            <footer>
                <ul className="container footer">
                    <li><p>Contact</p>
                        <ul>
                            <li><a href="mailto:email@example.com">email@example.com</a></li>
                            <li><a href="tel:0123456778">01.23.45.67.78</a></li>
                            <li>rue Rivoli, 1</li>
                            <li>Paris, 750000</li>
                        </ul>
                    </li>
                    <li><p>A propos</p>
                        <ul>
                            <li>© Atout On Line 2023</li>
                            <li>
                                "Cette application web a été produite avec l'aide financière de
                                l'Union européenne. Le contenu du site web est la responsabilité
                                de ABC"
                            </li>
                        </ul>
                    </li>
                    <li><p>Reseaux sociaux</p>
                        <ul className="reseaux">
                            <li>
                                <a href=""><i className="fab fa-facebook-f"></i></a>
                            </li>
                            <li>
                                <a href=""><i className="fab fa-instagram"></i></a>
                            </li>
                            <li>
                                <a href=""><i className="fab fa-twitter"></i></a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </footer>
        </>
    )

};

export default Footer;