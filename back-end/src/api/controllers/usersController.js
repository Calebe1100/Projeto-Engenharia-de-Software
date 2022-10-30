import * as yup from 'yup';
import UserRepository from "../../models/user.js";

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

async function store(req, res) {

  let schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    registrationNumber: yup.string().required(),
    birthDate: yup.string().required(),
    period: yup.string(), 
    });

  if(!(await schema.isValid(req.body))){
    return res.status(400).json({
      error: true,
      message: "Dados inválidos"
    })
  }

  let userExist = await UserRepository.findOne({where: { email: req.body.email }});
  if(userExist) {
    return res.status(400).json({
      error: true,
      message: "Este usuário já existe!"
    })
  }

  const data = { name: req.body.name, email: req.body.email, password: req.body.password, registration: req.body.registrationNumber, birth_date: req.body.birthDate };

  // data.password = await bcrypt.hash(data.password, 8); //TODO Esta dando erro na criptação

   await UserRepository.create(data).then(() => {
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

}

export default { findAll, store };
