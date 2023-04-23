import pool from "../config/database.js";

// récupération de 4 produits aléatoires
export const RandomProduct = (req, res) => {
    pool.query(`SELECT products.id, products.image, products.name, products.refuge_id, products.price, products.description, refuges.name as refName 
                FROM products
                INNER JOIN refuges ON products.refuge_id = refuges.id
                ORDER BY RAND()
                LIMIT 4`,
        function (error, products, fields) {
            res.json(products);
            //console.log(products);
        },
    );
};


// récupération des refuges sur la page des refuges
export const GetAllRefuges = (req, res) => {
    pool.query(`SELECT * FROM refuges`, (error, refuges, fields) => {
        res.json(refuges);
        //console.log(refuges);
    },
    );
};

export const GetRefuge = (req, res) => {
    let id = req.params.id;

    pool.query(`SELECT refuges.name, refuges.id, refuges.description 
                FROM refuges 
                WHERE refuges.id = ?`,
        [id], (error, refuge, fields) => {
            res.json(refuge[0]);
            //console.log(refuge[0]);
            //console.log(error);
        },
    );
};

// récupération de tout les produit (max 5)
export const GetAllProducts = (req, res) => {
    pool.query(`SELECT products.name, products.description, products.image, products.price, products.id, products.refuge_id FROM products 
                INNER JOIN refuges ON refuges.id = products.refuge_id`, (error, products, fields) => {
        res.json(products);
        //console.log(products);
    },
    );
};

// récupération du fond recueillis
export const FundCollected = (req, res) => {
    pool.query(`SELECT SUM(price) as total from orders`, (error, fond, fields) => {
        res.json(fond);
        //console.log(fond);
    },
    );
};

// récupépation du nombre des donateurs
export const Partenaires = (req, res) => {
    pool.query(`SELECT * FROM donateurs`,
        function (error, donateurs, fields) {
            res.json(donateurs);
            //console.log(donateurs);
        },
    );
};