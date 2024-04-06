import { Request, Response, NextFunction } from 'express';
import { chooseCities, createCity, deleteCity, findCity, getAllCities, updateCity } from '../services/CityServices';


class CityController {
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
      await updateCity(req.body, req.params)
      return res
        .status(200).json({ message: "The city is updated successfully!" });

    } catch (error) {
      next(error)
    }
  }

  async deleteCity(req: Request, res: Response, next: NextFunction) {
    try {
      await deleteCity(req.params)
      return res
        .status(200).json({ message: "The city is deleted successfully!" });

    } catch (error) {
      next(error)
    }
  }

  async getAllCities(req: Request, res: Response, next: NextFunction) {
    try {
      await getAllCities()
      return res
        .status(200)
    } catch (error) {
      next(error)
    }
  }

  async chooseCities(req: Request, res: Response, next: NextFunction) {
    try {
      await chooseCities((req.params))
      return res
        .status(200)
    } catch (error) {
      next(error)
    }
  }

}
export const controller = new CityController();

