import { Router } from "express";
import Productos from "../models/Productos.js";
import { createProductos,  deleteProductos, renderEditProductos, renderProductos, statusProducto, updateProductos,  } from "../Controllers/productoController.js";


const router = Router();

router.get("/", renderProductos );

router.post("/productos/agregar", createProductos );

router.get("/productos/:id/update", renderEditProductos);

router.post("/productos/:id/update", updateProductos);

router.get("/productos/:id/delete", deleteProductos);

router.get("/productos/:id/status",statusProducto);

export default router;