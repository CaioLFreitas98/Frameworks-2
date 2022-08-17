import { DataSource } from 'typeorm';
import { CreateDogs } from './entity/create.dog';


export const dogsProviders = [
  {
    provide: 'Dogs_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(CreateDogs),
    inject: ['DATA_SOURCE'],
  },
];