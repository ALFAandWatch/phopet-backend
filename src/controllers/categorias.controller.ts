import { Request, Response } from 'express';
import {
   agregarCategoriaService,
   borrarCategoriaService,
   listarCategoriasService,
   listarTodasLasCategoriasService,
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

// LA QUE USO EN LA LISTA NORMAL DE CATEGORIAS
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

// LA QUE USO EN EL SELECT PARA QUE SE LISTEN LAS CATEGORIAS CON ARBOL DE GERARQUIAS
export const listarTodasLasCategoriasController = async (
   req: Request,
   res: Response
) => {
   try {
      const categorias = await listarTodasLasCategoriasService();
      res.status(200).json(categorias);
   } catch (error) {
      console.error('Error al listar todas las categorías:', error);
      res.status(500).json({ error: 'Error al obtener las categorías' });
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
