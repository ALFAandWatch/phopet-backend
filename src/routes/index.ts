import { Router } from 'express';
import productosRouter from './productos.router';
import categoriasRouter from './categorias.router';
import atributosRouter from './atributos.router';
import imagenesRouter from './imagenes.router';

const router: Router = Router();

router.use('/productos', productosRouter);
router.use('/categorias', categoriasRouter);
router.use('/atributos', atributosRouter);
router.use('/imagenes', imagenesRouter);

export default router;
