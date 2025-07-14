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

// LA QUE USO EN LA LISTA NORMAL DE CATEGORIAS
export const listarCategoriasService = async (page = 1, limit = 10) => {
   const categoriaRepo = AppDataSource.getRepository(Categoria);
   const skip = (page - 1) * limit;

   const [categorias, total] = await categoriaRepo.findAndCount({
      skip,
      take: limit,
      relations: ['parent'],
      order: { nombre: 'ASC' },
   });

   return {
      data: categorias,
      total,
      page,
      lastPage: Math.ceil(total / limit),
   };
};

// LA QUE USO EN EL SELECT PARA QUE SE LISTEN LAS CATEGORIAS CON ARBOL DE GERARQUIAS
export const listarTodasLasCategoriasService = async () => {
   const categoriaRepo = AppDataSource.getRepository(Categoria);
   const categorias = await categoriaRepo.find({
      relations: ['parent'],
      order: { nombre: 'ASC' }, // opcional
   });

   return categorias;
};

export const borrarCategoriaService = async (id: number) => {
   const categoriaRepo = AppDataSource.getRepository(Categoria);

   const categoria = await categoriaRepo.findOneBy({ id });
   if (!categoria) {
      throw new Error('Categoría no encontrada');
   }

   await categoriaRepo.remove(categoria);
   return { message: 'Categoría eliminada correctamente' };
};
