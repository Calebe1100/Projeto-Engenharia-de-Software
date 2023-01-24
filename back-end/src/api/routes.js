import express from "express";
import courses from "./controllers/coursesController.js";
import login from "./controllers/loginController.js";
import requirementController from "./controllers/requirementController.js";
import midiawareJwt from "./controllers/sharedController.js";
import systemDisciplines from "./controllers/systemDisciplinesController.js";
import userDisciplines from "./controllers/userDisciplinesController.js";
import userDisciplinesCourseController from "./controllers/userDisciplinesCourseController.js";
import users from "./controllers/usersController.js";

const routes = express.Router();

/*-----------Usuário-------------*/
routes.get("/users", midiawareJwt.verifyJWT, users.findAll);
routes.post("/users", users.store);

/*-----------Login-------------*/
routes.post("/login", login.login);

/*-----------Course-------------*/
routes.get("/courses", courses.findAll);
routes.post("/courses", midiawareJwt.verifyJWT, courses.store);

/*-----------UserDisciplines-------------*/
routes.get("/disciplines", userDisciplines.findAll);
routes.post("/disciplines", midiawareJwt.verifyJWT, userDisciplines.store);

/*-----------SystemDisciplines-------------*/
routes.get("/system-disciplines", systemDisciplines.findAll);
routes.post("/system-disciplines", midiawareJwt.verifyJWT, systemDisciplines.store);

/*-----------UserCourseDiscipline-------------*/
routes.get("/user-disciplines-course", userDisciplinesCourseController.findByUser);
routes.post("/user-disciplines-course", userDisciplinesCourseController.store);
routes.put("/user-disciplines-course", userDisciplinesCourseController.updateStatusByIds);

/*-----------Requirement-------------*/
routes.get("/requirement-discipline", requirementController.findByDiscipline);
routes.post("/requirement-discipline", requirementController.store);

export { routes as default };

