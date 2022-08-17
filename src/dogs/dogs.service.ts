import { Injectable } from '@nestjs/common';
import { CreateDogsDto } from 'src/dogs/dto/dogs.dto';

@Injectable()
export class DogsService {
    private readonly dogs: CreateDogsDto[] = [];

    create (dog: CreateDogsDto){
        this.dogs.push(dog);
    }

    
    findAll():CreateDogsDto[]{
    //buscara todos elementos do bd
        return this.dogs;
    }
    findOne(id: number){
        return 'one cat'
      }
    remove(id: number){
        return ' dog delete '
      }
    update (CreateDogsDto: CreateDogsDto){
        const cat = this.findOne(CreateDogsDto.id);
    }

}