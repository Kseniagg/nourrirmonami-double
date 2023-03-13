import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/router.js";

const app = express();
const PORT = 8000;

// autorisation des multiples requêtes du react au serveur
app.use(cors());
// permet d'analyser et de récupérer les informations json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));




//appel du routeur
app.use("/", router);

// CONNEXION AU SERVEUR
app.listen(PORT, () => {
    console.log(`Server started on port http://localhost:${PORT}`);
});