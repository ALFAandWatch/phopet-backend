import { Router } from 'express';
import {
   borrarMultiplesImagenesController,
   listarImagenesController,
   subirImagenController,
} from '../controllers/imagenes.controller';
import { uploadMiddleware } from '../middlewares/upload.middleware';

const imagenesRouter = Router();

imagenesRouter.post('/upload', uploadMiddleware, subirImagenController);
imagenesRouter.get('/listarImagenes', listarImagenesController);
imagenesRouter.delete('/borrar-multiples', borrarMultiplesImagenesController);

export default imagenesRouter;
