import { Request, Response } from "express";
import { AppError } from "../utils/AppError";
import { string, z } from "zod";
export class ProductsController {

  index(request: Request, response: Response) {

    const { page, limit } = request.query


    response.send(`pagina ${page} de ${limit}`)

  }

  create(request: Request, response: Response) {

    const themeSchema = z.object({
      name: z.string()
        .trim()
        .min(6, { message: "tem que ter no mínimo seis carácter" }),//.nullish()
      price: z.number().positive({ message: "o price tem ter um valor positivo" })
    })

    const { name, price } = themeSchema.parse(request.body)

    // if (!name || !price) {
    // throw new AppError("Nome e preço é obrigatório");

    //}
    //throw new AppError("erro no servidor")
    //throw new Error("erro no servidor");

    response.status(201).json({ name, price })
  }
}