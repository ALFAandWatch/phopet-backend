import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Atributo {
   @PrimaryGeneratedColumn()
   id!: number;

   @Column()
   nombre!: string;

   @Column({ unique: true })
   slugUrl!: string;

   @Column('simple-array')
   valores!: string[];
}
