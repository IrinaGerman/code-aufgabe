import { Request, Response, NextFunction } from 'express';
import { chooseCitiesFromDB, createAllCities, createCity, deleteCityDB, findCity, getAllCitiesFromDB, updateCityDB } from '../services/CityServices';


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
      if (await findCity(req.body)) {
        return res
          .status(500)
          .json({ message: "There is a city with the same name" });
      }
      await createCity(req.body)
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
      console.log("11111111111111", cities);    
      return res
        .status(200).json(cities)
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

}
export const controller = new CityController();

