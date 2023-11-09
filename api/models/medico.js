"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Medico extends Model {
    static associate(models) {
      Medico.belongsTo(models.Usuario, { as: 'usuario', onDelete: 'cascade' });
      Medico.belongsTo(models.Especialidade, { as: 'especialidade', foreignKey: 'idEspecialidade' });
    }
  }
  Medico.init(
    {
      usuarioId: DataTypes.INTEGER,
      sexo: DataTypes.STRING,
      numeroRegistro: DataTypes.STRING,
      idEspecialidade: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Medico",
      tableName: "Medicos",
      freezeTableName: true,
    }
  );

  return Medico;
};
