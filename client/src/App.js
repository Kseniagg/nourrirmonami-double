import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Refuges from "./Controllers/Refuges";
import Refuge from "./Controllers/Refuge";
import Home from "./Controllers/Home";
import Shop from "./Controllers/Shop";
import Connexion from "./Controllers/Connexion";
import CreateAccount from "./Controllers/CreateAccount";
import Cart from "./Controllers/Cart";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/refuges" element={<Refuges />} />
          <Route path="/" element={<Home />} />
          <Route path="/refuge/:id" element={<Refuge />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/createAccount" element={<CreateAccount />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>

    </>

  );

}

export default App;
