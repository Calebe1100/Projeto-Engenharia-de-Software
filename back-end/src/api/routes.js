import express from "express";
import courses from "../api/controllers/coursesController.js";
import login from "../api/controllers/loginController.js";
import systemDisciplines from "../api/controllers/systemDisciplinesController.js";
import userDisciplines from "../api/controllers/userDisciplinesController.js";
import users from "../api/controllers/usersController.js";
import midiawareJwt from "../api/controllers/sharedController.js";

const routes = express.Router();

/*-----------Usuário-------------*/
routes.get("/users", midiawareJwt.verifyJWT,  users.findAll);
routes.post("/users", users.store);

/*-----------Login-------------*/
routes.post("/login",  login.login);

/*-----------Course-------------*/
routes.get("/courses",  courses.findAll);
routes.post("/courses", midiawareJwt.verifyJWT, courses.store);

/*-----------UserDisciplines-------------*/
routes.get("/disciplines", userDisciplines.findAll);
routes.post("/disciplines", midiawareJwt.verifyJWT, userDisciplines.store);

/*-----------SystemDisciplines-------------*/
routes.get("/system-disciplines",  systemDisciplines.findAll);
routes.post("/system-disciplines", midiawareJwt.verifyJWT, systemDisciplines.store);

export { routes as default };
