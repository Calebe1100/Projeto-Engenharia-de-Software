import * as yup from 'yup';
import UserRepository from "../../models/user";

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
    password: yup.string().required()
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

  const { name, email, password, registration, birth_date } = req.body;

  const data = { name, email, password, registration, birth_date };

  // data.password = await bcrypt.hash(data.password, 8);

  console.log(data);

   await UserRepository.create(data).then((res) => {
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
