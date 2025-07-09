import { Request, Response } from 'express';
import * as productoService from '../services/productos.service';
import { EstadoProducto } from '../enums/EstadoProducto';

export const agregarProducto = async (req: Request, res: Response) => {
   try {
      const productoCreado = await productoService.crearProducto(req.body);
      res.status(201).json(productoCreado);
   } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al agregar producto' });
   }
};

export const listarProductos = async (req: Request, res: Response) => {
   try {
      const page = parseInt(req.query.page as string) || 1;
      const pageSize = parseInt(req.query.pageSize as string) || 10;

      const estado = req.query.estado as EstadoProducto | 'TODOS' | undefined;

      const resultado = await productoService.getAllProductos(
         page,
         pageSize,
         estado
      );

      res.status(200).json(resultado);
   } catch (error) {
      console.error('Error al obtener productos:', error);
      res.status(500).json({ message: 'Error al obtener productos' });
   }
};
