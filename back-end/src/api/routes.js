import express from "express";
import users from "../api/controllers/usersController";
import login from "../api/controllers/loginController";


const routes = express.Router();

/*-----------Usuário-------------*/
routes.get("/users", users.findAll);
routes.post("/users", users.store);

/*-----------Login-------------*/
routes.post("/login", login.login);

export { routes as default };
