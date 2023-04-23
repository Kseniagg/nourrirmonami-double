import mysql from 'mysql';

let pool = mysql.createPool({
    connectionLimit: 10000,
    host: "db.3wa.io",
    user: "kseniiagladkova",
    password: "62e54b1b92cf6f501fbb48f0304e971f",
    database: "kseniiagladkova_nourrirmonami",
});

// Connexion à la BDD
pool.getConnection((err, connection) => {
    console.log("Connected to the database");
    if (err) throw err;
});

export default pool;