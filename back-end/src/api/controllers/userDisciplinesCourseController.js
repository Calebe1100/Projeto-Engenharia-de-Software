import CourseRepository from "../../models/course.mjs";
import DisciplinesRepository from "../../models/discipline.mjs";
import UsersRepository from "../../models/user.mjs";
import UserCourseDisciplineRepository from "../../models/userCourseDiscipline.mjs";

import yup from 'yup';

async function findByUser(req, res) {

  UserCourseDisciplineRepository.findAll({ where: { idUser: req.query.idUser }, include: [{ model: DisciplinesRepository }, { model: CourseRepository }] }).then(data => {
    res.send(data);
  })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    })
}

async function updateStatusByIds(req, res) {

  let schema = yup.object({
    status: yup.number().required(),
    id: yup.string().required()
  });

  if (!(await schema.isValid(req.body[0]))) {
    return res.status(400).json({
      error: true,
      message: "Dados inválidos"
    })
  }

  await Promise.all(req.body.forEach(async element => {
    await UserCourseDisciplineRepository.findOne({ where: { id: element.id } }).then(async data => {
      await data.update({ status: element.status }).then(data => {
        res.send(data)
      })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Não foi possível atualizar a disciplina!"
          });
        })
    }
    )
  }
  ));

}

async function deleteById(req, res) {
  await UserCourseDisciplineRepository.deleteById(req.id).then(data => {
    res.send(data);
  })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Não foi possível deletar a disciplina!"
      });
    })
}

async function store(req, res) {

  let schema = yup.object({
    description: yup.string().required(),
    idCourse: yup.string().required(),
    idDiscipline: yup.string().required(),
    idUser: yup.string().optional(),
    status: yup.number().required(),
    typeDiscipline: yup.number().optional(),
  });

  if (!(await schema.isValid(req.body))) {
    return res.status(400).json({
      error: true,
      message: "Dados inválidos"
    })
  }

  let userExist = await UsersRepository.findOne({ where: { id: req.body.idUser } });

  if (!userExist) {
    return res.status(400).json({
      error: true,
      message: "Usuário inválido!"
    })
  }

  let disciplineExist = await DisciplinesRepository.findOne({ where: { id: req.body.idDiscipline } });

  if (!disciplineExist) {
    return res.status(400).json({
      error: true,
      message: "Disciplina inválida!"
    })
  }

  let courseExist = await CourseRepository.findOne({ where: { id: req.body.idCourse } });

  if (!courseExist) {
    return res.status(400).json({
      error: true,
      message: "Curso inválido!"
    })
  }

  const { idCourse, idUser, idDiscipline, finish_date, status, init_date } = req.body;

  const data = { status, finish_date, idCourse, idUser, idDiscipline, init_date };

  await UserCourseDisciplineRepository.create(data).then(() => {
    return res.status(200).json({
      error: false,
      message: "Disciplina cadastrada para o usuário com sucesso"
    })
  })

}

export default { findByUser, store, updateStatusByIds, deleteById };
