import pool from "../config/database.js";

export const NewOrder = (req, res) => {
    for (let prod of req.body.products) {
        pool.query(
            `INSERT INTO orders (date, price, product_id, donateur_id)
			         VALUES(?, ?, ?, ?)`,
            [new Date(), prod.price, prod.id, req.body.idDonateur],
            function (error, result, fields) {
                //res.json({ error: error });
                res.json(result);
                //console.log(prod);
                //console.log(req.body.idDonateur)
            },
        );
    }
};

export const GetOrderById = (req, res) => {
    let id = req.params.id;
    console.log(`order: ${id}`);
    pool.query(
        `SELECT orders.id, orders.price, orders.product_id, orders.date
        FROM orders 
        WHERE donateur_id = ?`,
        [id],
        function (error, orders, fields) {
            res.json(orders);
            console.log(`orders: ${orders}`);
        },
    );
};


