import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Configuración del almacenamiento
const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      const dest = path.join(process.cwd(), 'public/uploads');

      if (!fs.existsSync(dest)) {
         fs.mkdirSync(dest, { recursive: true });
      }

      cb(null, dest);
   },
   filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const filename = `${Date.now()}${ext}`;
      cb(null, filename);
   },
});

export const uploadMiddleware = multer({ storage }).single('imagen');
