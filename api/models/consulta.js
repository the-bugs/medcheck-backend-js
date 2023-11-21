'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Consulta extends Model {
    static associate(models) {
      Consulta.belongsTo(models.Medico, { as: 'medico', foreignKey: 'idMedico', onDelete: 'cascade' });
    }
  }
  Consulta.init(
    {
      idAgenda: DataTypes.INTEGER,
      dataMarcacao: DataTypes.DATE,
      isRealizada: DataTypes.BOOLEAN,
    }, {
    sequelize,
    modelName: "Consulta",
    tableName: "Consultas",
    freezeTableName: true,
  });
  return Consulta;
};
