import * as schemaPedido from "../schemas/pedido.schema.js";
import {getIO} from "../utils/socket.js";

export const findAll = async function() {
    console.log("------------service------------");
    let results= await schemaPedido.findAll();
    return results;
};

export const create = async function(objPedido) {
    console.log("------------service------------");
    let results= await schemaPedido.create(objPedido);

    const io=getIO();
    io.emit("nuevoPedido", results);

    return results;
};

export const leer = async function(id_pedido) {
    console.log("------------service------------");
    await schemaPedido.leer(id_pedido);
    let results= await schemaPedido.findById(id_pedido);

    const io=getIO();
    io.emit("pedidoLeido", results[0]);

    return results;
};

export const pagar = async function(id_pedido) {
    console.log("------------service------------");
    await schemaPedido.pagar(id_pedido);
    let results= await schemaPedido.findById(id_pedido);

    const io=getIO();
    io.emit("pagoConfirmado", results[0]);

    return results[0];
};
