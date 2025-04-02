import { Router } from "express";
import { myMiddlewares } from "../middlewares/myMiddlewares";
import { ProductsController } from "../controllers/productsControllers";
const ProductsRoutes = Router()
const productsControllers = new ProductsController()




ProductsRoutes.get("/", myMiddlewares, productsControllers.index)

ProductsRoutes.post("/", myMiddlewares, productsControllers.create)

export { ProductsRoutes }