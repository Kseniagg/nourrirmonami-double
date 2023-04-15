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
                if (req.body.length > 0) {
                    res.status(400).send({ message: "У нас не может не быть контента" });
                }
                res.json(result);
                //console.log(error);
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

export const GetUserById = (req, res) => {
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

export const UpdateUser = (req, res) => {
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
        pool.query(
            "UPDATE donateurs SET nom = ?, prenom = ?, email = ?, password = ? WHERE id = ?",
            [req.body.nom, req.body.prenom, req.body.email, hash, req.body.id],
            function (error, result, fields) {
                res.json(result);
            },
        );
    });
};

export const DeleteUser = (req, res) => {
    pool.query(
        "DELETE FROM donateurs WHERE id = ? LIMIT 1",
        [req.body.idDonateur],
        function (error, result, fields) {
            res.json(result);
        }
    )
}

