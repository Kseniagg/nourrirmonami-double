import pool from "../config/database.js";
import bcrypt from "bcrypt";

const saltRounds = 10;

// pour CreateAccount
export const UserRegister = (req, res) => {
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        pool.query(
            "INSERT INTO donateurs (nom, prenom, email, password) VALUES (?, ?, ?, ?)",
            [req.body.nom, req.body.prenom, req.body.email, hash],
            function (error, result, fields) {
                res.json(result);
                console.log(error);
            },
        );
    });
};


export const UserLogin = (req, res) => {
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