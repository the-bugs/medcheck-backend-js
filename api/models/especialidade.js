"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class especialidade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      especialidade.belongsTo(models.Usuario, {
        foreignKey: "especialidade_id",
      });
    }
  }
  especialidade.init(
    {
      nomeEspecialidade: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Especialidade",
      tableName: "Especialidades",
      freezeTableName: true,
    }
  );
  return especialidade;
};
