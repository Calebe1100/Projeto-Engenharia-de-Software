import express from "express";
import users from "../api/controllers/usersController";
import login from "../api/controllers/loginController";
import courses from "../api/controllers/coursesController";
import systemDisciplines from "../api/controllers/systemDisciplinesController";
import userDisciplines from "../api/controllers/userDisciplinesController";

const routes = express.Router();

/*-----------Usuário-------------*/
routes.get("/users", users.findAll);
routes.post("/users", users.store);

/*-----------Login-------------*/
routes.post("/login", login.login);

/*-----------Course-------------*/
routes.get("/courses", courses.findAll);
routes.post("/courses", courses.store);

/*-----------UserDisciplines-------------*/
routes.get("/disciplines", userDisciplines.findAll);
routes.post("/disciplines", userDisciplines.store);

/*-----------SystemDisciplines-------------*/
routes.get("/system-disciplines", systemDisciplines.findAll);
routes.post("/system-disciplines", systemDisciplines.store);

export { routes as default };
