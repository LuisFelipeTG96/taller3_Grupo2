import * as spedido from "../services/pedido.service.js";

export const create = async function(req, res) {
    console.log("------------controller------------");

    try{
        const objPedido= req.body;
        console.log(objPedido);
        const pedido = await spedido.create(objPedido);
        res.json(pedido || {});
    }catch(error){
        console.log(error);
        res.status(500).json({"error":"Error ingresando registros"});
    }
}

export const pagar = async function(req, res) {
    console.log("------------controller------------");

    try{
        const id_pedido= req.params.id;
        console.log(id_pedido);
        const pedido = await spedido.pagar(id_pedido);
        res.json(pedido || {});
    }catch(error){
        console.log(error);
        res.status(500).json({"error":"Error ingresando registros"});
    }
}
