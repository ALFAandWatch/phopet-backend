import { AppDataSource } from '../data-source';
import { Categoria } from '../entities/Categoria';

export const agregarCategoriaService = async (data: {
   nombre: string;
   slugUrl: string;
   parentId?: number;
}) => {
   const categoriaRepo = AppDataSource.getRepository(Categoria);

   // Buscar padre si viene parentId
   let parent = null;
   if (data.parentId) {
      parent = await categoriaRepo.findOneBy({ id: data.parentId });
      if (!parent) {
         throw new Error('Categoría padre no encontrada');
      }
   }

   const nuevaCategoriaData: Partial<Categoria> = {
      nombre: data.nombre,
      slugUrl: data.slugUrl,
   };

   if (parent) {
      nuevaCategoriaData.parent = parent;
   }

   const nuevaCategoria = categoriaRepo.create(nuevaCategoriaData);

   return await categoriaRepo.save(nuevaCategoria);
};

export const listarCategoriasService = async (page = 1, limit = 10) => {
   const categoriaRepo = AppDataSource.getRepository(Categoria);
   const skip = (page - 1) * limit;

   const [categorias, total] = await categoriaRepo.findAndCount({
      skip,
      take: limit,
      relations: ['parent'], // incluir la categoría padre
      order: { nombre: 'ASC' },
   });

   return {
      data: categorias,
      total,
      page,
      lastPage: Math.ceil(total / limit),
   };
};
