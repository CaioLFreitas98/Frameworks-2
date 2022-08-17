import { DataSource } from 'typeorm';
import { CreateCatsDto } from './cats/dto/cats.dto';
import { CreateDogsDto } from './dogs/dto/dogs.dto';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'animalsp',
        entities: [CreateCatsDto, CreateDogsDto],
        synchronize: true,  
      });

      return dataSource.initialize();
    },
  },
];