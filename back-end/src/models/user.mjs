import { DataTypes } from "sequelize";
import db from "./db.mjs";

const User = db.define("user", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  registration: {
    type: DataTypes.STRING(11),
    allowNull: false,
  },
  birth_date: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  period: {
    type: DataTypes.INTEGER,
    allowNull: true,
  }
}, 
{
  // don't add the timestamp attributes (updatedAt, createdAt)
  timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,

  freezeTableName: true
});

export default User;