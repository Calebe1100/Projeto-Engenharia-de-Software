import yup from 'yup';
import SystemDisciplinesRepository from "../../models/discipline.mjs";

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

async function updateById(req, res) {

  let schema = yup.object({
    id: yup.string().required(),
    typeDiscipline: yup.number().required()
  });

  if (!(await schema.isValid(req.body))) {
    return res.status(400).json({
      error: true,
      message: "Dados inválidos"
    })
  }

  let discipline;
  await SystemDisciplinesRepository.findByPk(req.body.id).then(data => {
    discipline = data;
  })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Disciplina não encontrada!"
      });
    })

  await discipline.update({ typeDiscipline: req.body.typeDiscipline }).then(data => {
    res.send(data)
  })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Não foi possível atualizar a disciplina!"
      });
    });
}

async function findByCourseId(req, res) {

  SystemDisciplinesRepository.findAll({ where: { idCourse: req.body.idCourse } }).then(data => {
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
    workload: yup.number().required(),
    typeDiscipline: yup.number().required(),
    description: yup.string().optional(),
    idCourse: yup.string().required()
  });

  if (!(await schema.isValid(req.body))) {
    return res.status(400).json({
      error: true,
      message: "Dados inválidos"
    })
  }

  let disciplineExist = await SystemDisciplinesRepository.findOne({ where: { name: req.body.name } });
  if (disciplineExist) {
    return res.status(400).json({
      error: true,
      message: "Essa disciplina já existe!"
    })
  }


  const { name, workload, typeDiscipline, description, idCourse } = req.body;

  const data = { name, workload, typeDiscipline, description, idCourse };

  await SystemDisciplinesRepository.create(data).then((res) => {
    return res.status(200).json({
      error: false,
      message: "Disciplina cadastrada com sucesso"
    })
  })

}

export default { findAll, store, findByCourseId, updateById };
