"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Prontuario extends Model {
    static associate(models) {
      Prontuario.belongsTo(models.Paciente, { as: 'paciente', foreignKey: 'idPaciente', onDelete: 'cascade' });
    }
  }
  Prontuario.init(
    {
      idPaciente: DataTypes.INTEGER,
      descricao: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Prontuario",
      tableName: "Prontuarios",
      freezeTableName: true,
    }
  );

  return Prontuario;
};
