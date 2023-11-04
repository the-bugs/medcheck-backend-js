"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Paciente extends Model {
    static associate(models) {
      Paciente.belongsTo(models.Usuario, { as: 'usuario' });
    }
  }
  Paciente.init(
    {
      usuarioId: DataTypes.INTEGER,
      sexo: DataTypes.STRING,
      cpf: DataTypes.STRING,
      dataNascimento: DataTypes.DATE,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Paciente",
      tableName: "Pacientes",
      freezeTableName: true,
    }
  );

  return Paciente;
};
