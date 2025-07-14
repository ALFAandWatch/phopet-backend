// src/services/imagenes/crearImagenService.ts
import { AppDataSource } from '../../src/data-source';
import { Imagen } from '../../src/entities/Imagen';
import fs from 'fs';
import path from 'path';

export const crearImagenService = async (url: string): Promise<Imagen> => {
   const imagenRepo = AppDataSource.getRepository(Imagen);

   const nuevaImagen = imagenRepo.create({ url });
   await imagenRepo.save(nuevaImagen);

   return nuevaImagen;
};

export const listarImagenesService = async (offset: number, limit: number) => {
   const imagenRepo = AppDataSource.getRepository(Imagen);

   const [imagenes, total] = await imagenRepo.findAndCount({
      skip: offset,
      take: limit,
      order: {
         createdAt: 'DESC',
      },
   });

   return { imagenes, total };
};

export const borrarMultiplesImagenesService = async (ids: number[]) => {
   const imagenRepo = AppDataSource.getRepository(Imagen);
   for (const id of ids) {
      const imagen = await imagenRepo.findOneBy({ id });

      if (imagen) {
         // Ruta absoluta del archivo
         const rutaFisica = path.join(process.cwd(), 'public', imagen.url);

         // Borramos archivo si existe
         if (fs.existsSync(rutaFisica)) {
            fs.unlinkSync(rutaFisica);
         }

         // Borramos de la base de datos
         await imagenRepo.delete(id);
      }
   }

   return { message: 'Imágenes eliminadas correctamente' };
};
