import { DataSource } from 'typeorm';
import { CreateCats } from './entity/create.cat';


export const catsProviders = [
  {
    provide: 'CATS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(CreateCats),
    inject: ['DATA_SOURCE'],
  },
];