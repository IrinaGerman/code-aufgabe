import { IConfig, IDBConfig } from "../../interfaces/Interfaces";

const dbConfig: IConfig = {
  username: process.env.USER_SQL,
  password: process.env.PASS_SQL,
  database: process.env.DATABASE,
  host: process.env.HOST_SQL,
  dialect: 'mysql',
};
const config: IDBConfig = {
  development: dbConfig,
  production: dbConfig,
};

export default config
