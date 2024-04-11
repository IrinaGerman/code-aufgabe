import { Dialect } from "sequelize"
export interface ICity {
  uuid: string
  cityName: string
  count: number 
  pictureLink? : string
}

export interface IParams {
  uuid?: string
  name?: string
  str?: string
  count?: string
  page?: string
}

export interface IConfig {
  username: string
  password: string
  database: string
  host: string
  dialect: Dialect
}

export interface IDBConfig {
  development: IConfig
  production: IConfig 
}