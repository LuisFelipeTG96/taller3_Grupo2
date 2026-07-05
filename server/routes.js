import _express from "express";
import rseguridad from "./routes/seguridad.routes.js";
import rpedido from "./routes/pedido.routes.js";

const router= _express.Router();

//... secciones ...
router.use('/seguridad', rseguridad);
router.use('/pedido', rpedido);

export default router;
