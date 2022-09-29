import DisciplinesRepository from "../../models/discipline";
import bcrypt from 'bcryptjs';
import yup from 'yup';

async function findAll(req, res) {

  DisciplinesRepository.findAll().then(data => {
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

  /**
   * Validação através do YUP schema
   * Início
   */
  // let schema = yup.object.shape({
  //   name: yup.string().required(),
  //   email: yup.string().email().required(),
  //   password: yup.string().required()
  // });

  // if(!(await schema.isValid(req.body))){
    // return res.status(400).json({
    //   error: true,
    //   message: "Dados inválidos"
    // })
  // }

   /**
   * Validação através do YUP schema
   * fim
   */

  /**
   * Validação no banco de dados
   * Verifica se o usuário existe
   */

  // let userExist = await UserRepository.findOne({ email: req.body.email });
  // if(userExist) {
  //   return res.status(400).json({
  //     error: true,
  //     message: "Este usuário já existe!"
  //   })
  // }

   /**
    * Desestrutuação dos dados da requisição
    */
  const { name, workload, description, idCourse } = req.body;

  /**
    * criação da constante data
    */
  

  const data = { name, workload, description, idCourse };

  /**
    * Inserção no banco de dados 
    */

  await DisciplinesRepository.create(data).then((res) => {
        return res.status(200).json({
        error: false,
        message: "Disciplina cadastrada com sucesso"
      })
  })
  
}

export default { findAll, store };
