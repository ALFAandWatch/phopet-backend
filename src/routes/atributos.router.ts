import { Router } from 'express';
import {
   agregarAtributo,
   eliminarAtributo,
   listarAtributos,
   patchAtributoValores,
} from '../controllers/atributos.controller';

const atributosRouter = Router();

atributosRouter.post('/nuevoAtributo', agregarAtributo);
atributosRouter.get('/listarAtributos', listarAtributos);
atributosRouter.patch('/editarAtributo/:id', patchAtributoValores);
atributosRouter.delete('/eliminarAtributo/:id', eliminarAtributo);

export default atributosRouter;
