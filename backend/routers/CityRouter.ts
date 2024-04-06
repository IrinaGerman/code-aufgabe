import Router from "express"
import { controller } from "../controllers/CityController";

export const router = Router();

router.post("/new-city", controller.addCity);
router.put("/update-city/:id", controller.updateCity);
router.delete("/delete-city/:id", controller.deleteCity);
router.get("/all-cities", controller.getAllCities);
router.get("/some-cities", controller.chooseCities);
