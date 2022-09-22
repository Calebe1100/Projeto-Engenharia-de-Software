import express from "express";
import users from "src/api/controllers/userController";

const routes = express.Router();

routes.get("/users", users.findAll);

export { routes as default };
