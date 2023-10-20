"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Administrador extends Model {
    static associate(models) {}
  }
  Administrador.init(
    {
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      senha: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Administrador",
      tableName: "Administradores",
      freezeTableName: true,
    }
  );
  return Administrador;
};
