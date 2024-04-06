import { DataTypes } from 'sequelize';
import { sequelize } from './db';

export const City = sequelize.define('City', {
  uuid: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  cityName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  count: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},);
