import { Router } from 'express';
import productosRouter from './productos.router';
import categoriasRouter from './categorias.router';

const router: Router = Router();

router.use('/productos', productosRouter);
router.use('/categorias', categoriasRouter);

export default router;
