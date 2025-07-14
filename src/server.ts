import express from 'express';
import cors from 'cors';
import router from './routes';
import path from 'path';

const app = express();

// Middlewares
app.use(
   cors({
      origin: 'http://localhost:3000',
      credentials: true,
   })
);
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '../public/uploads')));

// Rutas
app.use('/api', router);

export default app;
