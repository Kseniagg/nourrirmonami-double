import Nav from "./Nav";

const Header = () => {
    return (
        <>
            <header>
                <div className="container header">
                    <div className="logo">
                        <a href="/">Nourrir mon ami</a>
                    </div>
                    <Nav />
                </div>
            </header>
        </>
    )

};

export default Header;