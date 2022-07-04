import express from "express";
import { routes } from "./routes";

const server = express();
server.use(express.json());  // Sempre colocar a leitura json antes do routes  
server.use(routes);

server.listen(5000, () => {
  console.log("Servidor ON na porta 5000")
});
