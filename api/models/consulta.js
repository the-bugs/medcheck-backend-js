'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Consulta extends Model {
    static associate(models) {
      Consulta.belongsTo(models.Medico, { as: 'medico', foreignKey: 'idMedico', onDelete: 'cascade' });
    }
  }
  Consulta.init({
    dataConsulta: DataTypes.DATE,
    dataMarcacao: DataTypes.DATE,
    tipoConsulta: DataTypes.STRING,
    isRealizada: DataTypes.BOOLEAN,
    idMedico: DataTypes.INTEGER,
    idPaciente: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: "Consulta",
    tableName: "Consultas",
    freezeTableName: true,
  });
  return Consulta;
};
