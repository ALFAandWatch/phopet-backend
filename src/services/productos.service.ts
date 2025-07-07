import { AppDataSource } from '../data-source';
import { Producto } from '../entities/Producto';

export const crearProducto = async (
   datosProducto: Partial<Producto>
): Promise<Producto> => {
   const productoRepo = AppDataSource.getRepository(Producto);
   const nuevoProducto = productoRepo.create(datosProducto);
   return await productoRepo.save(nuevoProducto);
};

export const getAllProductos = async (page = 1, pageSize = 10) => {
   const productoRepo = AppDataSource.getRepository(Producto);

   const [productos, total] = await productoRepo.findAndCount({
      skip: (page - 1) * pageSize,
      take: pageSize,
   });

   return {
      productos,
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize),
   };
};
