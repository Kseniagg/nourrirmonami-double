import pool from "../config/database.js";
import bcrypt from "bcrypt";

const saltRounds = 10;

// pour Create Account
export const DonateurRegister = (req, res) => {
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        pool.query(
            "INSERT INTO donateurs (lastName, firstName, email, password) VALUES (?, ?, ?, ?)",
            [req.body.lastName, req.body.firstName, req.body.email, hash],
            function (error, result, fields) {
                res.json(result);
                //console.log(error);
            },
        );
    });
};


export const DonateurLogin = (req, res) => {
    pool.query(
        "SELECT * FROM donateurs WHERE email = ?",
        [req.body.email],
        function (error, result, fields) {
            if (result.length === 0) {
                res.json({ reponse: false, message: "L'identifiant n'existe pas" });
            } else {
                bcrypt.compare(
                    req.body.password,
                    result[0].password,
                    function (err, result2) {
                        if (!result2) {
                            res.json({
                                reponse: false,
                                message: "Le mot de passe n'est pas correct",
                            });
                        } else {
                            res.json({
                                reponse: true,
                                id: result[0].id,
                            });
                        }
                    },
                );
            }
        },
    );
};

export const GetDonateur = (req, res) => {
    let id = req.params.id;
    //console.log(id);
    pool.query(
        "SELECT * FROM `donateurs` WHERE id = ?",
        [id],
        function (error, user, fields) {
            res.json(user[0]);
        },
    );
};

export const UpdateDonateur = (req, res) => {
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        pool.query(
            "UPDATE donateurs SET lastName = ?, firstName = ?, email = ?, password = ? WHERE id = ?",
            [req.body.lastName, req.body.firstName, req.body.email, hash, req.body.id],
            function (error, result, fields) {
                res.json(result);
            },
        );
    });
};

export const DeleteDonateur = (req, res) => {
    pool.query(
        "DELETE FROM donateurs WHERE id = ? LIMIT 1",
        [req.body.donateurId],
        function (error, result, fields) {
            res.json(result);
        }
    )
}

