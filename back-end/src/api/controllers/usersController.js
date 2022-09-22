import UserRepository from "src/models/user";

async function findAll(req, res) {
  const users = await UserRepository.findAll();
  res.json(users);
}

export default { findAll };
