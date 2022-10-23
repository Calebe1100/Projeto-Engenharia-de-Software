import { DataTypes } from "sequelize";
import db from "./db.js";

export default db.define("course", {
  id: {
    type: DataTypes.INTEGER,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mandatory_workload: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  optional_workload: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  complementary_workload: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
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
