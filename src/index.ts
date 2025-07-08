import 'dotenv/config';
import { AppDataSource } from './data-source';
import app from './server';

const PORT = process.env.PORT || 3001;

AppDataSource.initialize()
   .then(() => {
      console.log('✅ Conexión a la base de datos exitosa');

      app.listen(PORT, () => {
         console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
      });
   })
   .catch((err) => {
      console.error('❌ Error al conectar a la base de datos:', err);
   });
