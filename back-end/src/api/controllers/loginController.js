import bcrypt from 'bcryptjs';
import UserRepository from "../../models/user.js";

async function login(req, res) {
  
    const { email, password } = req.body;

    const userExist = await UserRepository.findOne({where: { email: req.body.email }});

    if(!userExist){
      return res.status(400).json({
        error: true,
        message: "Usuário não existe!"
      })
    }

    if(!(await bcrypt.compare(password, userExist.password))) {
      return res.status(400).json({
        error: true,
        message: "A senha está inválida!"
      })
    }
    return res.status(200).json({
      user: {
        name: userExist.name,
        email: userExist.email
      },
      // token: jwt.sign(
      //   {id: userExist._id}, 
      //   process.env.SECRET_JWT_KEY, 
      //   {expiresIn: process.env.EXPIRE_IN_KEY} 
      // )
    })
    
  }

export default { login };
