import {
   Entity,
   PrimaryGeneratedColumn,
   Column,
   ManyToMany,
   JoinTable,
} from 'typeorm';
import { EstadoProducto } from '../enums/EstadoProducto';
import { TipoProducto } from '../enums/TipoProducto';
import { Atributo } from './Atributo';

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

   @Column({
      type: 'enum',
      enum: TipoProducto,
      default: TipoProducto.SIMPLE,
   })
   tipo!: TipoProducto;

   @ManyToMany(() => Atributo, { eager: true })
   @JoinTable()
   atributos!: Atributo[];
}
