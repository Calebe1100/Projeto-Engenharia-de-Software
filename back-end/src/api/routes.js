import express from "express";
import users from "../api/controllers/usersController";

const routes = express.Router();

routes.get("/users", users.findAll);

export { routes as default };
