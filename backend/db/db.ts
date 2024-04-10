import { Sequelize } from 'sequelize';
import config  from './config/config.js';
import dotenv from 'dotenv';
import { IConfig } from '../interfaces/Interfaces.js';

dotenv.config();

const env = process.env.NODE_ENV
export const dbConfig: IConfig = config[env]

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect 
});

export default sequelize