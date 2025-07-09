import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { EstadoProducto } from '../enums/EstadoProducto';

@Entity()
export class Producto {
   @PrimaryGeneratedColumn()
   id!: number;

   @Column({ length: 100 })
   nombre!: string;

   @Column({ unique: true })
   sku!: string;

   @Column({ nullable: true })
   descripcion?: string;

   @Column('decimal', { precision: 10, scale: 2 })
   precio!: number;

   @Column('int', { nullable: true })
   descuento?: number;

   @Column({ nullable: true })
   imagenUrl?: string;

   @Column({
      type: 'enum',
      enum: EstadoProducto,
      default: EstadoProducto.PUBLICADO,
   })
   estado!: EstadoProducto;

   @Column({ default: true })
   activo!: boolean;
}
