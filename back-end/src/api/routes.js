import express from "express";
import users from "../api/controllers/usersController";
import login from "../api/controllers/loginController";
import courses from "../api/controllers/coursesController";
import systemDisciplines from "../api/controllers/systemDisciplinesController";
import userDisciplines from "../api/controllers/userDisciplinesController";
import sharedController from './controllers/sharedController';

const routes = express.Router();

/*-----------Usuário-------------*/
routes.get("/users", sharedController.verifyJWT, users.findAll);
routes.post("/users", users.store);

/*-----------Login-------------*/
routes.post("/login",  login.login);

/*-----------Course-------------*/
routes.get("/courses", sharedController.verifyJWT, courses.findAll);
routes.post("/courses", sharedController.verifyJWT, courses.store);

/*-----------UserDisciplines-------------*/
routes.get("/disciplines", sharedController.verifyJWT, userDisciplines.findAll);
routes.post("/disciplines", sharedController.verifyJWT, userDisciplines.store);

/*-----------SystemDisciplines-------------*/
routes.get("/system-disciplines", sharedController.verifyJWT, systemDisciplines.findAll);
routes.post("/system-disciplines", sharedController.verifyJWT, systemDisciplines.store);

export { routes as default };
