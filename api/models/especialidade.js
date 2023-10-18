"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Especialidade extends Model {
    static associate(models) {}
  }
  Especialidade.init(
    {
      nome: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Especialidade",
      tableName: "Especialidades",
      freezeTableName: true,
    }
  );
  return Especialidade;
};
