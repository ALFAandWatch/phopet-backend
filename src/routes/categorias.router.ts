import { Router } from 'express';
import {
   agregarCategoria,
   borrarCategoria,
   listarCategorias,
} from '../controllers/categorias.controller';

const categoriasRouter = Router();

categoriasRouter.post('/nuevaCategoria', agregarCategoria);
categoriasRouter.get('/listarCategorias', listarCategorias);
categoriasRouter.delete('/borrarCategoria/:id', borrarCategoria);

export default categoriasRouter;
