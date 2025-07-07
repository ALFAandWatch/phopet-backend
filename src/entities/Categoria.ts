import {
   Entity,
   PrimaryGeneratedColumn,
   Column,
   ManyToOne,
   OneToMany,
   JoinColumn,
} from 'typeorm';

@Entity()
export class Categoria {
   @PrimaryGeneratedColumn()
   id!: number;

   @Column()
   nombre!: string;

   @Column({ unique: true })
   slugUrl!: string;

   // Relación padre (una categoría puede tener un padre)
   @ManyToOne(() => Categoria, (categoria) => categoria.hijos, {
      nullable: true,
   })
   @JoinColumn({ name: 'parentId' })
   parent?: Categoria;

   @Column({ nullable: true })
   parentId?: number;

   // Relación hijos (una categoría puede tener muchas subcategorías)
   @OneToMany(() => Categoria, (categoria) => categoria.parent)
   hijos!: Categoria[];
}
