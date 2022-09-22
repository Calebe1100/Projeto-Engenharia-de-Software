import express from "express";
import routes from "./api/routes";

const app = express();

app.use(express.json());
app.use(routes);

var port = 3000;

app.listen(port, () => {
    console.log("Servidor iniciado na porta 3000");
});