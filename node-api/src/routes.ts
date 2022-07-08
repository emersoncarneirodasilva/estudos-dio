import { Router, Request, Response } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { GetAllUserController } from "./controllers/GetAllUserController";
import { UpdateUserController } from "./controllers/UpdateUserController";

const router = Router();
const createUserController = new CreateUserController();
const getAllUserController = new GetAllUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

router.get("/", (request: Request, response: Response) => {
  // Todas as funcionalidades da rota
  return response.json({ mensagem: "Bem vindo a nossa DIO API" })
});

router.post("/usuarios", createUserController.handle);
router.get("/usuarios", getAllUserController.handle);
router.patch("/usuario", updateUserController.handle);
router.delete("/usuario/:id", deleteUserController.handle);

export{ router };

// Método POST - Cria um usuário (C)
// Método GET - Seleciona/ler um usuário (R)
// Método PUT/PATCH - Edita um(ou mais) usuário(s) (U)
// Método DELETE - Deletar um usuário (D)