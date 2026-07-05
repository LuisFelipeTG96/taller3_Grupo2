import { Server } from "socket.io";
import {FRONTEND_URL} from "./constantes.js";
import * as spedido from "../services/pedido.service.js";

let io;

export const configSocket= function(server){
  console.log("io.configSocket");
  io = new Server(server, {
    cors: { origin: FRONTEND_URL }  // Permite conexiones desde cualquier origen (ajusta en producción)
  });

  io.on("connection", (socket) => {
    console.log("Usuario conectado al socket: ", socket.id);
    // Escuchar evento para matricular un usuario específico
    socket.on("matriculado", (usuario) => {
      socket.join(usuario);  // Establecer el tunel
      console.log(`Usuario ${usuario} matriculado`);
    });
    socket.on("disconnect", () => {
      console.log("Usuario desconectado del socket: ", socket.id);
    });

    socket.on("pedidoLeido", async (id_pedido) => {
      console.log("pedidoLeido", id_pedido);
      await spedido.leer(id_pedido);
    });

  });

  // Exportar io para usarlo en otras partes (ej: enviar notificaciones)
  return io;
};

export const getIO= function(){
  if(!io){
    throw new Error("Socket.io no inicializado");
  }
  return io;
}
