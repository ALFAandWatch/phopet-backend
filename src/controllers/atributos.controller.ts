import { Request, Response } from 'express';
import {
   agregarAtributoService,
   borrarAtributo,
   listarAtributosService,
   updateAtributoValoresService,
} from '../services/atributos.service';

export const agregarAtributo = async (req: Request, res: Response) => {
   try {
      const { nombre, slugUrl } = req.body;

      if (!nombre || !slugUrl) {
         res.status(400).json({ message: 'Faltan campos requeridos' });
      }

      const atributoCreado = await agregarAtributoService({ nombre, slugUrl });

      res.status(201).json({
         message: 'Atributo creado correctamente',
         data: atributoCreado,
      });
   } catch (error: any) {
      console.error('Error al crear atributo:', error);
      res.status(500).json({
         message: 'Error al crear atributo',
         error: error.message,
      });
   }
};

export const listarAtributos = async (req: Request, res: Response) => {
   try {
      const atributos = await listarAtributosService();

      res.status(200).json({
         message: 'Atributos obtenidos correctamente',
         data: atributos,
      });
   } catch (error: any) {
      console.error('Error al obtener atributos:', error);
      res.status(500).json({
         message: 'Error al obtener atributos',
         error: error.message,
      });
   }
};

export const patchAtributoValores = async (req: Request, res: Response) => {
   try {
      const id = parseInt(req.params.id, 10);
      const { valores } = req.body;

      if (!Array.isArray(valores)) {
         res.status(400).json({
            error: '`valores` debe ser un array de strings',
         });
      }

      const atributoActualizado = await updateAtributoValoresService(
         id,
         valores
      );
      res.status(200).json(atributoActualizado);
   } catch (error: any) {
      res.status(500).json({
         error: error.message || 'Error al actualizar el atributo',
      });
   }
};

export const eliminarAtributo = async (req: Request, res: Response) => {
   try {
      const id = parseInt(req.params.id);

      if (isNaN(id)) {
         res.status(400).json({ message: 'ID inválido' });
      }

      await borrarAtributo(id);

      res.status(200).json({ message: 'Atributo eliminado correctamente' });
   } catch (error: any) {
      console.error('Error al eliminar atributo:', error);
      res.status(500).json({
         message: error.message || 'Error interno del servidor',
      });
   }
};
