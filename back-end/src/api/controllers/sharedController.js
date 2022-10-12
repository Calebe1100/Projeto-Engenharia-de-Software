import jwt from 'jsonwebtoken';
import dotenv from "dotenv/config.js";

async function verifyJWT(req, res, next) {
  
    const token = req.headers['authorization']

    jwt.verify(token, process.env.SECRET_JWT_KEY, (err, decoded) => {
        console.log(err)
        if(err){
            return res.status(401).end();
        }
        console.log(req)
        next();
    });
  }

  export default {verifyJWT};
