import express from "express";
import users from "../api/controllers/usersController";
import login from "../api/controllers/loginController";
import courses from "../api/controllers/coursesController";
import disciplines from "../api/controllers/disciplinesController";

const routes = express.Router();

/*-----------Usuário-------------*/
routes.get("/users", users.findAll);
routes.post("/users", users.store);

/*-----------Login-------------*/
routes.post("/login", login.login);

/*-----------Course-------------*/
routes.get("/courses", courses.findAll);
routes.post("/courses", courses.store);

/*-----------Discipline-------------*/
routes.get("/disciplines", disciplines.findAll);
routes.post("/disciplines", disciplines.store);
routes.put("/disciplines", disciplines.update)
routes.delete("/disciplines", disciplines.drop)

export { routes as default };
