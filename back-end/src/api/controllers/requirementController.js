import yup from 'yup';
import RequirementRepository from "../../models/requirement.mjs";

async function findByDiscipline(req, res) {

  RequirementRepository.findAll({ where: { idDiscipline: req.body.idDiscipline } }).then(data => {
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
    typeRequirement: yup.number().required(),
    idDisciplineRequired: yup.string().required(),
    idDiscipline: yup.string().required()
  });

  if (!(await schema.isValid(req.body))) {
    return res.status(400).json({
      error: true,
      message: "Dados inválidos"
    })
  }

  let requirementExist = await RequirementRepository.findOne({
    where: {
      idDiscipline: req.body.idDiscipline,
      idDisciplineRequired: req.body.idDisciplineRequired
    }
  });

  if (requirementExist) {
    return res.status(400).json({
      error: true,
      message: "Esse requisito já existe!"
    })
  }


  const { typeRequirement, idDisciplineRequired, idDiscipline } = req.body;

  const data = { typeRequirement, idDisciplineRequired, idDiscipline };

  await RequirementRepository.create(data).then((res) => {
    return res.status(200).json({
      error: false,
      message: "Requisito cadastrado com sucesso"
    })
  })

}

export default { findByDiscipline, store };
