import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Producto {
   @PrimaryGeneratedColumn()
   id!: number;

   @Column({ length: 100 })
   nombre!: string;

   @Column({ nullable: true })
   descripcion?: string;

   @Column('decimal', { precision: 10, scale: 2 })
   precio!: number;

   @Column('int', { nullable: true })
   descuento?: number;

   @Column({ nullable: true })
   imagenUrl?: string;

   @Column({ default: true })
   activo!: boolean;
}
