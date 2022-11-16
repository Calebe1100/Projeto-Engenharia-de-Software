import { DataTypes } from "sequelize";
import db from "./db.mjs";

const Course = db.define("course", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(100),
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
    type: DataTypes.STRING(255),
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

export default Course;