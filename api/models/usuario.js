'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
    }
  }
  Usuario.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    tipo: DataTypes.ENUM(['Administrador', 'Medico', 'Paciente']),
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Usuario',
    tableName: "Usuarios",
    defaultScope: {
      attributes: {
        exclude: ['senha']
      }
    }
  });

  return Usuario;
};