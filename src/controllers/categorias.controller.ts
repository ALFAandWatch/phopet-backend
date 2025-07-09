import { Request, Response } from 'express';
import {
   agregarCategoriaService,
   borrarCategoriaService,
   listarCategoriasService,
} from '../services/categorias.service';

export const agregarCategoria = async (req: Request, res: Response) => {
   try {
      const { nombre, slugUrl, parentId } = req.body;
      const categoria = await agregarCategoriaService({
         nombre,
         slugUrl,
         parentId,
      });
      res.status(201).json(categoria);
   } catch (error) {
      res.status(400).json({ message: 'Error al agregar categoría' });
   }
};

export const listarCategorias = async (req: Request, res: Response) => {
   try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;

      const resultado = await listarCategoriasService(page, limit);
      res.json(resultado);
   } catch (error) {
      res.status(500).json({ message: 'Error al listar categorías' });
   }
};

export const borrarCategoria = async (req: Request, res: Response) => {
   try {
      const id = Number(req.params.id);
      const result = await borrarCategoriaService(id);
      res.status(200).json(result);
   } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al eliminar la categoría' });
   }
};
