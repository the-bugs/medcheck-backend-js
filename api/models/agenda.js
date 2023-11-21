"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Agenda extends Model {
    static associate(models) {
      Agenda.belongsTo(models.Medico, { as: 'medico', foreignKey: 'idMedico' });
      Agenda.belongsTo(models.Paciente, { as: 'paciente', foreignKey: 'idPaciente' });
    }
  }
  Agenda.init(
    {
      dataAgenda: DataTypes.DATE,
      idMedico: DataTypes.INTEGER,
      idPaciente: DataTypes.INTEGER,
      disponivel: DataTypes.BOOLEAN,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Agenda",
      tableName: "Agendas",
      freezeTableName: true,
    }
  );
  return Agenda;
};
