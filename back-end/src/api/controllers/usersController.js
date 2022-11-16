import * as yup from 'yup';
import DisciplineRepository from "../../models/discipline.mjs";
import UserRepository from "../../models/user.mjs";

async function findAll(req, res) {

  UserRepository.findAll().then(data => {
    res.send(data);
  })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    })
}

async function findById(req, res) {

  UserRepository.findAll({ where: { idUser: req.body.idUser } }).then(data => {
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
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    registrationNumber: yup.string().required(),
    birthDate: yup.date().required(),
    period: yup.number().optional(),
  });

  if (!(await schema.isValid(req.body))) {
    return res.status(400).json({
      error: true,
      message: "Dados inválidos"
    })
  }

  let userExist = await UserRepository.findOne({ where: { email: req.body.email } });
  if (userExist) {
    return res.status(400).json({
      error: true,
      message: "Este usuário já existe!"
    })
  }

  const { name, email, password, registration, birth_date, period, idCourse } = req.body;

  let disciplines = await DisciplineRepository.findAll({ where: { idCourse: idCourse } });

  const data = { name, email, password, registration, birth_date, period };

  // data.password = await bcrypt.hash(data.password, 8); //TODO Esta dando erro na criptação

  const user = await UserRepository.create(data).then(() => {
    res.status(200).json({
      error: false,
      message: "Usuário cadastrado com sucesso!"
    })
  })
    .catch(err => {
      res.status(400).json({
        error: err
      })
    })

  let dataRelation = { idCourse, user };

 /*  disciplines.forEach(discipline => {
    await UserCourseDisciplineRepository.create(dataRelation).then(() => {
       
     }).catch(err => {
       res.status(400).json({
         error: err
       })
     });
  }); */
}

export default { findAll, store, findById };
