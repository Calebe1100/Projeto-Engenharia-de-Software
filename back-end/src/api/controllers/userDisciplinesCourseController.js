import CourseRepository from "../../models/course.mjs";
import DisciplinesRepository from "../../models/discipline.mjs";
import UsersRepository from "../../models/user.mjs";
import UserDisciplinesCourseRepository from "../../models/userCourseDiscipline.mjs";

import yup from 'yup';

async function findByUser(req, res) {

  UserDisciplinesCourseRepository.findAll({ where: { idUser: req.body.idUser } }).then(data => {
    res.send(data);
  })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    })
}

async function store(req, res) {

  let schema = yup.object({
    idDiscipline: yup.string().required(),
    idCourse: yup.string().required(),
    idUser: yup.string().required(),
    status: yup.number().required(),
    finish_date: yup.date().optional()
  });

  if (!(await schema.isValid(req.body))) {
    return res.status(400).json({
      error: true,
      message: "Dados inválidos"
    })
  }

  let userExist = await UsersRepository.findOne({ where: { id: req.body.idUser } });
  let disciplineExist = await DisciplinesRepository.findOne({ where: { id: req.body.idDiscipline } });
  let courseExist = await CourseRepository.findOne({ where: { id: req.body.idCourse } });

  if (!userExist) {
    return res.status(400).json({
      error: true,
      message: "Usuário inválido!"
    })
  }

  if (!disciplineExist) {
    return res.status(400).json({
      error: true,
      message: "Disciplina inválida!"
    })
  }

  if (!courseExist) {
    return res.status(400).json({
      error: true,
      message: "Curso inválido!"
    })
  }

  const { idCourse, idUser, idDiscipline, finish_date, status } = req.body;
  let init_date = Date.now();

  const data = { status, finish_date, idCourse, idUser, idDiscipline, init_date };

  await UserDisciplinesRepository.create(data).then((res) => {
    return res.status(200).json({
      error: false,
      message: "Disciplina cadastrada para o usuário com sucesso"
    })
  })

}

export default { findByUser, store };
