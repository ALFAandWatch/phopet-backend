import { Request, Response } from 'express';
import {
   borrarMultiplesImagenesService,
   crearImagenService,
   listarImagenesService,
} from '../services/imagenes.service';

export const subirImagenController = async (req: Request, res: Response) => {
   if (!req.file) {
      res.status(400).json({ error: 'No se recibió ninguna imagen' });
      return;
   }

   const fileUrl = `/uploads/${(req.file as Express.Multer.File).filename}`;

   try {
      const imagen = await crearImagenService(fileUrl);
      res.status(200).json({ url: imagen.url });
      return;
   } catch (err) {
      res.status(500).json({ error: 'Error al guardar la imagen' });
      return;
   }
};

export const listarImagenesController = async (req: Request, res: Response) => {
   try {
      const offset = parseInt(req.query.offset as string) || 0;
      const limit = parseInt(req.query.limit as string) || 10;

      const { imagenes, total } = await listarImagenesService(offset, limit);

      res.status(200).json({ imagenes, total });
   } catch (error) {
      console.error('Error al listar imágenes:', error);
      res.status(500).json({ error: 'Error al listar imágenes' });
   }
};

export const borrarMultiplesImagenesController = async (
   req: Request,
   res: Response
) => {
   const { ids } = req.body;

   if (!Array.isArray(ids)) {
      res.status(400).json({ error: 'Formato de IDs inválido' });
   }

   try {
      const result = await borrarMultiplesImagenesService(ids);
      res.status(200).json(result);
   } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al borrar las imágenes' });
   }
};
