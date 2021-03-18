const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Register extends Model {}

Register.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "COVID-19",
    },
    testDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    patient_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "patient",
        key: "id",
        unique: false,
      },
    },
    location_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "location",
        key: "id",
        unique: false,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "register",
  }
);

module.exports = Register;
