import express from 'express';
import cors from 'cors';
import router from './routes';

const app = express();

// Middlewares
app.use(
   cors({
      origin: 'http://localhost:3000',
      credentials: true,
   })
);
app.use(express.json());

// Rutas
app.use('/api', router);

// Agregá más rutas si querés
// app.use('/api/usuarios', usuariosRouter);

export default app;
