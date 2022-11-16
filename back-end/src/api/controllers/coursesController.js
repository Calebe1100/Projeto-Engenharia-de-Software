import yup from 'yup';
import CoursesRepository from "../../models/course.mjs";

async function findAll(req, res) {

  CoursesRepository.findAll().then(data => {
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

  CoursesRepository.findAll({ where: { idCourse: req.body.idCourse } }).then(data => {
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
    mandatory_workload: yup.number().required(),
    optional_workload: yup.number().required(),
    complementary_workload: yup.number().required(),
    description: yup.string().optional()
  });

  if (!(await schema.isValid(req.body))) {
    return res.status(400).json({
      error: true,
      message: "Dados inválidos"
    })
  }


  let courseExist = await CoursesRepository.findOne({ where: { name: req.body.name } });
  if (courseExist) {
    return res.status(400).json({
      error: true,
      message: "Este curso já existe!"
    })
  }

  const { name, mandatory_workload, optional_workload, complementary_workload, description } = req.body;

  const data = { name, mandatory_workload, optional_workload, complementary_workload, description };


  await CoursesRepository.create(data).then((res) => {

    return res.status(200).json({
      error: false,
      message: "Curso cadastrado com sucesso"
    })
  });

}

export default { findAll, store, findById };