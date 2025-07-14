import { AppDataSource } from '../data-source';
import { Atributo } from '../entities/Atributo';

export const agregarAtributoService = async (data: {
   nombre: string;
   slugUrl: string;
}) => {
   const atributoRepo = AppDataSource.getRepository(Atributo);

   // Verificar si ya existe un atributo con ese slug
   const existe = await atributoRepo.findOneBy({ slugUrl: data.slugUrl });
   if (existe) {
      throw new Error('Ya existe un atributo con ese slug');
   }

   const nuevoAtributo = atributoRepo.create({
      nombre: data.nombre,
      slugUrl: data.slugUrl,
      valores: [], // valores vacío al crearlo
   });

   return await atributoRepo.save(nuevoAtributo);
};

export const listarAtributosService = async () => {
   const atributoRepo = AppDataSource.getRepository(Atributo);

   const atributos = await atributoRepo.find();

   return atributos;
};

export const borrarAtributo = async (id: number): Promise<void> => {
   const atributoRepo = AppDataSource.getRepository(Atributo);

   const atributo = await atributoRepo.findOneBy({ id });

   if (!atributo) {
      throw new Error('Atributo no encontrado');
   }

   await atributoRepo.remove(atributo);
};
