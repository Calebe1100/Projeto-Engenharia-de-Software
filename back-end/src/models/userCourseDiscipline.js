import { DataTypes } from "sequelize";
import Course from "./course.js";
import db from "./db.js";
import Discipline from "./discipline.js";
import User from "./user.js";

const UserCourseDiscipline = db.define("user_course_discipline", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  init_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  finish_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: false
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

UserCourseDiscipline.belongsTo(Course, {
  constraint: true,
  foreignKey: 'idCourse',
  onDelete: 'CASCADE',
  allowNull: false,
});

Course.hasMany(UserCourseDiscipline, {
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

Discipline.hasMany(UserCourseDiscipline, {
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

User.hasMany(UserCourseDiscipline, {
  constraint: true,
  foreignKey: 'idUser',
  onDelete: 'CASCADE',
  allowNull: false,
});

export default UserCourseDiscipline;