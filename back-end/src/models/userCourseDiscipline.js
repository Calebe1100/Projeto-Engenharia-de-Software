import { Sequelize, DataTypes } from "sequelize";
import db from "./db";
import Course from "./course";
import Discipline from "./discipline";
import User from "./user ";

 const UserCourseDiscipline = db.define("user_course_discipline", {
  init_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  finish_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
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

UserCourseDiscipline.belongsTo(Course, {
  constraint: true,
  foreignKey: 'idCourse',
  onDelete: 'CASCADE',
  allowNull: false,
});

UserCourseDiscipline.belongsTo(Discipline, {
  constraint: true,
  foreignKey: 'idDiscipline',
  onDelete: 'CASCADE',
  allowNull: false,
});

UserCourseDiscipline.belongsTo(User, {
  constraint: true,
  foreignKey: 'idUser',
  onDelete: 'CASCADE',
  allowNull: false,
});


export default UserCourseDiscipline;