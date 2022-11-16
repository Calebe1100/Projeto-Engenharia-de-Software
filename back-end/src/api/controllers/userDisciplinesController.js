import CourseRepository from "../../models/course.mjs";
import DisciplinesRepository from "../../models/discipline.mjs";
import UsersRepository from "../../models/user.mjs";
import UserDisciplinesRepository from "../../models/userCourseDiscipline.mjs";

import yup from 'yup';

async function findAll(req, res) {

  UserDisciplinesRepository.findAll().then(data => {
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
    idSystemDiscipline: yup.int().required(),
    idCourse: yup.int().required(),
    idUser: yup.int().required(),
    name: yup.string().required(),
    workload: yup.string().required(),
    description: yup.string().required()
  });

  if(!(await schema.isValid(req.body))){
    return res.status(400).json({
      error: true,
      message: "Dados inválidos"
    })
  }

  let userExist = await UsersRepository.findOne({where: { id: req.body.idUser }});
  let disciplineExist = await DisciplinesRepository.findOne({where: { id: req.body.idSystemDiscipline}});
  let courseExist = await CourseRepository.findOne({where: { id: req.body.idCourse}});  
  
  if(!userExist || !disciplineExist || !courseExist) {
    return res.status(400).json({
      error: true,
      message: "Disciplina, curso ou usuário inválidos !"
    })
  }


  const { idCourse, idUser, idSystemDiscipline, name, workload, description,  } = req.body;

  const data = { name, workload, description, idCourse, idUser, idSystemDiscipline };

  await UserDisciplinesRepository.create(data).then((res) => {
        return res.status(200).json({
        error: false,
        message: "Disciplina cadastrada com sucesso"
      })
  })
  
}

export default { findAll, store };
