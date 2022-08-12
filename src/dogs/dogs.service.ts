import { Injectable } from '@nestjs/common';
import { CreateDogsDto } from 'src/cats/dto/dogs.dto';

@Injectable()
export class DogsService {
    private readonly dogs: CreateDogsDto[] = [];

    create (dog: CreateDogsDto){
        this.dogs.push(dog);
    }

    findAll(): CreateDogsDto[]{
        return this.dogs;
    }
}