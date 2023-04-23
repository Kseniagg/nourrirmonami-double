import pool from "../config/database.js";

export const NewOrder = (req, res) => {
    for (let prod of req.body.products) {
        pool.query(
            `INSERT INTO orders (date, price, product_id, donateur_id)
			         VALUES(?, ?, ?, ?)`,
            [new Date(), prod.price, prod.id, req.body.donateurId],
            function (error, result, fields) {
                //res.json({ error: error });
                res.json(result);
                //console.log(prod);
                //console.log(req.body.donateurId)
            },
        );
    }
};

export const GetOrder = (req, res) => {
    let id = req.params.id;
    console.log(`order: ${id}`);
    pool.query(
        `SELECT orders.id, orders.product_id, orders.date, products.name,
        SUM(orders.price) as total
        FROM orders
        INNER JOIN products ON orders.product_id = products.id
        WHERE donateur_id = ?
        GROUP BY orders.id ORDER BY orders.id ASC`,
        [id],
        function (error, orders, fields) {
            res.json(orders);
            console.log(`orders: ${orders}`);
        },
    );
};


