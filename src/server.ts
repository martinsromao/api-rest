import express from "express";
import { routes } from "./Routes";
import { Request, Response, NextFunction } from "express";
import { AppError } from "./utils/AppError";
import { ZodError } from "zod";
const PORT = 3333

const app = express()
app.use(express.json())

app.use(routes)

app.use(((error: any, request: Request, response: Response, next: NextFunction) => {

  if (error instanceof AppError) {
    return response.status(error.statusCode).json({ message: error.message })
  }

  if (error instanceof ZodError) {
    return response.status(401).json({ mensagem: "validation invalido", issues: error.format() })
  }

  response.status(500).json({ message: error.message })
}) as express.ErrorRequestHandler)
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

