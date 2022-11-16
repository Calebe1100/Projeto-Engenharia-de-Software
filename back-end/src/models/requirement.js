import { DataTypes } from "sequelize";
import db from "./db.js";
import Discipline from "./discipline";

const Requirement = db.define("requirement", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  typeRequirement: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idDisciplineRequired: {
    type: DataTypes.UUID,
    allowNull: false,
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

Requirement.belongsTo(Discipline, {
  constraint: true,
  foreignKey: 'idDiscipline',
  onDelete: 'CASCADE',
  allowNull: false,
});

Discipline.hasMany(Requirement, {
  constraint: true,
  foreignKey: 'idDiscipline',
  onDelete: 'CASCADE',
  allowNull: false,
});

export default Requirement;