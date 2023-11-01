"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Administrador extends Model {
    static associate(models) {
      Administrador.belongsTo(models.Usuario, { as: 'usuario' });
    }
  }
  Administrador.init(
    {
      usuarioId: DataTypes.INTEGER,
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
