import express from "express";
import routes from "./api/routes";
import cors from 'cors';

const app = express();

const allowedOrigins = ['http://localhost:3000'];

app.use((req,resp,next) => {
    resp.header("Access-Control-Allow-Origin", "*");
    app.use(cors());
    next();
});

app.use(express.json());
app.use(routes);

var port = 3000;

app.listen(port, () => {
    console.log("Servidor iniciado na porta 3000");
});