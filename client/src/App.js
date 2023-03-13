import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Refuges from "./Controllers/Refuges";
import Refuge from "./Controllers/Refuge";
import Home from "./Controllers/Home";
import Shop from "./Controllers/Shop";
import Connexion from "./Controllers/Connexion";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/refuges" element={<Refuges />} />
          <Route path="/" element={<Home />} />
          <Route path="/refuge/:id" element={<Refuge />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/connexion" element={<Connexion />} />
        </Routes>
      </BrowserRouter>

    </>

  );

}

export default App;
