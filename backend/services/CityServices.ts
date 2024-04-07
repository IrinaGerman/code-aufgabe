import { Op } from 'sequelize';
import { City } from '../db/models/City'
import { ICity, IParams } from '../interfaces/Interfaces';

export const createCity = async (city: ICity) => {
  return await City.create({ ...city });
}

export const findCity = async (params: IParams) => {
  return await City.findOne({ where: { cityName: params.cityName } });
}

export const updateCity = async (city: ICity, params: IParams) => {
  return City.update({ ...city }, { where: { cityName: params.cityName } })
}

export const deleteCity = async (params: IParams) => {
  return City.destroy({ where: { cityName: params.cityName } })
}

export const getAllCities = async () => {
  return City.findAll()
}

export const chooseCities = async (params: IParams) => {
  return City.findAll({
    where: {
      cityName: {
        [Op.like]: `${params.cityName}%`
      }
    }
  })
}