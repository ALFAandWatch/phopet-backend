import { Router } from 'express';
import {
   agregarProducto,
   listarProductos,
} from '../controllers/productos.controller';

const productosRouter = Router();

productosRouter.post('/nuevoProducto', agregarProducto);
productosRouter.get('/listarProductos', listarProductos);

export default productosRouter;
