import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { chooseCitiesFromDB, createAllCities, createCity, deleteCityDB, findCity, getAllCitiesFromDB, getPagesFromDB, updateCityDB } from '../services/CityServices';
import path from 'path';
import * as fs from 'node:fs';

class CityController {
  addAllCities = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await createAllCities()
      return res
        .status(200)
        .json({ message: "The all cities are created successfully!" });
    } catch (error) {
      next(error)
    }
  };

  addCity = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (await findCity(req.body.cityName)) {
        return res
          .status(200)
          .json({ message: "There is a city with the same name" });
      }
      await createCity({ ...req.body, uuid: uuidv4() })
      return res
        .status(200)
        .json({ message: "The city is created successfully!" });

    } catch (error) {
      next(error)
    }
  };

  async updateCity(req: Request, res: Response, next: NextFunction) {
    try {
      await updateCityDB(req.body, req.params)
      return res
        .status(200).json({ message: "The city is updated successfully!" });

    } catch (error) {
      next(error)
    }
  }

  async deleteCity(req: Request, res: Response, next: NextFunction) {
    try {
      await deleteCityDB(req.params)
      return res
        .status(200).json({ message: "The city is deleted successfully!" });
    } catch (error) {
      next(error)
    }
  }

  async getAllCities(req: Request, res: Response, next: NextFunction) {
    try {
      const cities = await getAllCitiesFromDB(req.params)      
      return res
        .status(200).json(cities)
    } catch (error) {
      next(error)
    }
  }

  async getAllPages(req: Request, res: Response, next: NextFunction) {
    try {
      const pages = await getPagesFromDB()
      return res
        .status(200).json(pages)
    } catch (error) {
      next(error)
    }
  }

  async chooseCities(req: Request, res: Response, next: NextFunction) {
    try {
      const cities = await chooseCitiesFromDB((req.params))
      return res
        .status(200).json(cities)
    } catch (error) {
      next(error)
    }
  }

  async getImage(req: Request, res: Response, next: NextFunction) {
    try {
      const imageName = req.params.name;
      const imagePath = path.resolve('assets', 'img', imageName);
      fs.access(imagePath, fs.constants.F_OK, (err) => {
        if (err) {
          res.status(200).json({ message: '0' });
        } else {
          res.status(200).json({ message: '1' });
        }
      });
    } catch (error) {
      next(error)
    }
  }




}
export const controller = new CityController();

