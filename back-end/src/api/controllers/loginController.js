import UserRepository from "../../models/user";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

async function login(req, res) {
  console.log( req.body)
    const { email, password } = req.body;

    console.log( email )

    const userExist = await UserRepository.findOne({ email });

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
      token: jwt.sign(
        {id: userExist._id}, 
        config.secret, 
        {expiresIn: config.expireIn} 
      )
    })
  }

export default { login };
