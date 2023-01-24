import { DataTypes } from "sequelize";
import Course from "./course.mjs";
import db from "./db.mjs";

 const discipline = db.define("discipline", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  workload: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  typeDiscipline: {
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

discipline.belongsTo(Course, {
  constraint: true,
  foreignKey: 'idCourse',
  onDelete: 'CASCADE',
  allowNull: false,
});

Course.hasMany(discipline, {
  constraint: true,
  foreignKey: 'idCourse',
  onDelete: 'CASCADE',
  allowNull: false,
});

export default discipline;