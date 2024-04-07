import { Dialect } from "sequelize"
export interface ICity {
  uuid: string
  cityName: string
  count: number
}

export interface IParams {
  uuid?: string
  cityName?: string
  count?: number
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