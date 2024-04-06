import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

export const sequelize = new Sequelize(process.env.DATABASE, process.env.USER_SQL, process.env.PASS_SQL, {
  host: process.env.HOST_SQL,
  dialect: 'mysql' 
});


