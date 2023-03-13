import express from "express";
import {
    RandomProduct,
    FundCollected,
    GetAllRefuges,
    Partenaires,
    GetAllProducts,
    GetRefugeById
} from "../controllers/FoodController.js";

const router = express.Router();

// FOOD
router.get("/randomProduct", RandomProduct);
router.get("/fund", FundCollected);
router.get("/refuge/:id", GetRefugeById);
router.get("/refuges", GetAllRefuges);
router.get("/products", GetAllProducts);
router.get("/parrain", Partenaires);

export default router;