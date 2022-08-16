import { DataSource } from 'typeorm';
import { CreateCatsDto } from './cats/dto/cats.dto';
import { CreateDogsDto } from './cats/dto/dogs.dto';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'admin',
        database: 'test',
        entities: [CreateCatsDto, CreateDogsDto],
        synchronize: true,  
      });

      return dataSource.initialize();
    },
  },
];