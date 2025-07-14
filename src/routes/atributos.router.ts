import { Router } from 'express';
import {
   agregarAtributo,
   eliminarAtributo,
   listarAtributos,
} from '../controllers/atributos.controller';

const atributosRouter = Router();

atributosRouter.post('/nuevoAtributo', agregarAtributo);
atributosRouter.get('/listarAtributos', listarAtributos);
atributosRouter.delete('/eliminarAtributo/:id', eliminarAtributo);

export default atributosRouter;
