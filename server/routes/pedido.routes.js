import _express from "express";
import * as cpedido from "../controllers/pedido.controller.js";
import * as mauth from "../middleware/auth.middleware.js";
const router= _express.Router();

router.post('/', mauth.authMiddleware(), cpedido.create);

router.put('/:id/pago', mauth.authMiddleware(), cpedido.pagar);

export default router;
