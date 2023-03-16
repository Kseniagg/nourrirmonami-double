import pool from "../config/database.js";

const NewOrder = (req, res) => {
    pool.query(
        "INSERT INTO orders (date, donateur_id, product_id, price) VALUES (?, ?, ?,?)",
        [new Date(), req.body.idDonateur, prod.id, prod.price],
        function (error, result, fields) {
            //res.json({ error: error });
            res.json(result);
            console.log(prod);
        },
    );
};

export default NewOrder;
