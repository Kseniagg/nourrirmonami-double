import express from "express";
import {
    RandomProduct,
    FundCollected,
    GetAllRefuges,
    Partenaires,
    GetAllProducts,
    GetRefugeById
} from "../controllers/FoodController.js";

import { UserRegister, UserLogin } from "../controllers/UserController.js";
import NewOrder from "../controllers/OrderController.js";

const router = express.Router();

// FOOD
router.get("/randomProduct", RandomProduct);
router.get("/fund", FundCollected);
router.get("/refuge/:id", GetRefugeById);
router.get("/refuges", GetAllRefuges);
router.get("/products", GetAllProducts);
router.get("/parrain", Partenaires);


//USER
router.post("/createAccount", UserRegister);     // CreateAccount
router.post("/api/connexion", UserLogin);       // Connexion

//ORDER
router.post("/api/addOrder", NewOrder);

export default router;