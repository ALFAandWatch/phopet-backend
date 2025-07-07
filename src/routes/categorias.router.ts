import { Router } from 'express';
import {} from '../controllers/productos.controller';
import {
   agregarCategoria,
   listarCategorias,
} from '../controllers/categorias.controller';

const categoriasRouter = Router();

categoriasRouter.post('/nuevaCategoria', agregarCategoria);
categoriasRouter.get('/listarCategorias', listarCategorias);

export default categoriasRouter;
