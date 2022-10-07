import SystemDisciplinesRepository from "../../models/discipline";
import yup from 'yup';

async function findAll(req, res) {

  SystemDisciplinesRepository.findAll().then(data => {
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
    id: yup.int().required(),
    name: yup.string().required(),
    workload: yup.string().required(),
    description: yup.string().required(),
    idCourse: yup.int().required()
  });

  if(!(await schema.isValid(req.body))){
    return res.status(400).json({
      error: true,
      message: "Dados inválidos"
    })
  }

  let userExist = await UserDisciplinesRepository.findOne({where: { name: req.body.email }});
  if(userExist) {
    return res.status(400).json({
      error: true,
      message: "Essa disciplina já existe!"
    })
  }


  const { name, workload, description, idCourse } = req.body;

  const data = { name, workload, description, idCourse };

  await UserDisciplinesRepository.create(data).then((res) => {
        return res.status(200).json({
        error: false,
        message: "Disciplina cadastrada com sucesso"
      })
  })
  
}

export default { findAll, store };
