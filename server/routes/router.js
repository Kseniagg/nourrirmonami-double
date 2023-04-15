import express from "express";
import {
    RandomProduct,
    FundCollected,
    GetAllRefuges,
    Partenaires,
    GetAllProducts,
    GetRefugeById
} from "../controllers/FoodController.js";

import { UserRegister, UserLogin, GetUserById, UpdateUser, DeleteUser } from "../controllers/UserController.js";
import { NewOrder, GetOrderById } from "../controllers/OrderController.js";

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
router.post("/connexion", UserLogin);       // Connexion
router.get("/getUser/:id", GetUserById);
router.post("/updateUser", UpdateUser);
router.post("/deleteAccount", DeleteUser);
//ORDER
router.post("/addOrder", NewOrder);
// afficher toutes les commandes passées du client sur son compte client
router.get("/getOrders/:id", GetOrderById);     // Dasheboard
export default router;