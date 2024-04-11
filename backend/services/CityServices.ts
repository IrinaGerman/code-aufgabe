import { Op } from 'sequelize';
import fs from 'fs'
import path from 'path'
import { City } from '../db/models/City'
import { ICity, IParams } from '../interfaces/Interfaces';

export const createAllCities = async () => {
  const rawData = fs.readFileSync(path.resolve('db', 'seeders', 'cities.json'), 'utf-8');
  const jsonData = JSON.parse(rawData);
  return await City.bulkCreate(jsonData);
}

export const createCity = async (city: ICity) => {
  return await City.create({ ...city, count: Number(city.count) });
}

export const findCity = async (cityName: string) => {
  return await City.findOne({ where: { cityName: cityName } });
}

export const updateCityDB = async (city: ICity, params: IParams) => {
  return await City.update({ ...city }, { where: { cityName: params.name } })
}

export const deleteCityDB = async (params: IParams) => {
  return await City.destroy({ where: { cityName: params.name } })
}

export const getPagesFromDB = async () => {
  const cities = await City.findAll({
    attributes: { exclude: ['createdAt', 'updatedAt'] },   
  })
  const cityData = cities.map(city => city.dataValues);
  const pages = cityData.length/5 + (cityData.length%5 ? 1 : 0)
  return pages
}

export const getAllCitiesFromDB = async (params: IParams) => {
  const cities = await City.findAll({
    attributes: { exclude: ['createdAt', 'updatedAt'] },
    limit: 5,
    offset: Number(params.page) * 5
  })
  const cityData = cities.map(city => city.dataValues);
  return cityData
}

export const chooseCitiesFromDB = async (params: IParams) => {
  const cities = await City.findAll({
    where: {
      cityName: {
        [Op.startsWith]: `${params.str}%`
      }
    },
    attributes: { exclude: ['createdAt', 'updatedAt'] },
    // limit: 5,
    // offset: Number(params.page) * 5
  })
  return cities
}