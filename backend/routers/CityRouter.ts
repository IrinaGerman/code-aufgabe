import Router from "express"
import { controller } from "../controllers/CityController";

export const router = Router();

router.post("/add-all-cities", controller.addAllCities);
router.post("/new-city", controller.addCity);
router.put("/update-city/:name", controller.updateCity);
router.delete("/delete-city/:name", controller.deleteCity);
router.get("/all-cities/:page", controller.getAllCities);
router.get("/all-pages", controller.getAllPages);
router.get("/some-cities/:str/:page", controller.chooseCities);
router.get("/images/:name", controller.getImage);
