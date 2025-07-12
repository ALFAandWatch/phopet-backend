import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { EstadoProducto } from '../enums/EstadoProducto';

@Entity()
export class Producto {
   @PrimaryGeneratedColumn()
   id!: number;

   @Column({ length: 100 })
   nombre!: string;

   @Column({ unique: true })
   slugUrl!: string;

   @Column({ nullable: true })
   descripcionCorta?: string;

   @Column({ nullable: true })
   descripcionLarga?: string;

   @Column()
   metaTitle!: string;

   @Column()
   metaDescription!: string;

   @Column('decimal', { precision: 10, scale: 2 })
   precioNormal!: number;

   @Column('decimal', { precision: 10, scale: 2 })
   precioRebajado!: number;

   @Column({ unique: true })
   sku!: string;

   @Column({ default: true })
   disponibilidad!: boolean;

   @Column({ nullable: true })
   imagenUrl?: string;

   @Column({
      type: 'enum',
      enum: EstadoProducto,
      default: EstadoProducto.PUBLICADO,
   })
   estado!: EstadoProducto;
}
