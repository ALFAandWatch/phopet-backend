import 'dotenv/config';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Producto } from './entities/Producto';
import { Categoria } from './entities/Categoria';
import { Atributo } from './entities/Atributo';
import { Imagen } from './entities/Imagen';

export const AppDataSource = new DataSource({
   type: 'postgres',
   host: process.env.DB_HOST,
   port: Number(process.env.DB_PORT) || 5432,
   username: process.env.DB_USERNAME,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME,
   synchronize: true,
   logging: false,
   entities: [Producto, Categoria, Atributo, Imagen],
   migrations: [],
   subscribers: [],
});
