import pool from "../config/database.js";

/* const NewOrder = (req, res) => {
    pool.query(
        function () {
            for (let tea of req.body.teas) {
                "INSERT INTO orders (date, product_id, price) VALUES (?,?,?)",
                    [new Date(), prod.id, prod.price],
                    function (error, result, fields) {
                        //res.json({ error: error });
                        res.json(result);
                        //console.log(req.body.id);
                        console.log(error);
                    },
        
            }
        }
    );

}; */

export const NewOrder = (req, res) => {
    for (let prod of req.body.products) {
        pool.query(
            `INSERT INTO orders (date, product_id, price)
			         VALUES(?, ?, ?)`,
            [new Date(), prod.id, prod.price],
            function (error, result, fields) {
                //res.json({ error: error });
                res.json(result);
                console.log(prod);
            },
        );
    }
};


export default NewOrder;
