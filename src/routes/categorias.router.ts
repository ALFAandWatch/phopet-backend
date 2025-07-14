import { Router } from 'express';
import {
   agregarCategoria,
   borrarCategoria,
   listarCategorias,
   listarTodasLasCategoriasController,
} from '../controllers/categorias.controller';

const categoriasRouter = Router();

categoriasRouter.post('/nuevaCategoria', agregarCategoria);
categoriasRouter.get('/listarCategorias', listarCategorias);
categoriasRouter.get(
   '/listarTodasLasCategorias',
   listarTodasLasCategoriasController
);
categoriasRouter.delete('/borrarCategoria/:id', borrarCategoria);

export default categoriasRouter;
