"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Especialidade, {
        foreignKey: "especialidade_id",
      });
    }
  }
  Usuario.init(
    {
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      senha: DataTypes.STRING,
      funcao: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Usuario",
      tableName: "Usuarios",
      freezeTableName: true,
    }
  );
  return Usuario;
};