// src/entities/Imagen.ts
import {
   Entity,
   PrimaryGeneratedColumn,
   Column,
   CreateDateColumn,
} from 'typeorm';

@Entity()
export class Imagen {
   @PrimaryGeneratedColumn()
   id!: number;

   @Column()
   url!: string;

   @CreateDateColumn()
   createdAt!: Date;
}
