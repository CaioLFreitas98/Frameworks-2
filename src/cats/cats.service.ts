import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateCatsDto } from './dto/cats.dto';
import { CreateCats } from './entity/create.cat';

@Injectable()
export class CatsService {
  private  cats: CreateCatsDto[] = [];

  constructor(
    @Inject('CATS_REPOSITORY')
    private catsRepository: Repository<CreateCats>,
  ) {}


  create (cat: CreateCats){
    // this.cats.push(cat);
    this.catsRepository.save(cat);
    // this.catsRepository.delete(cat);
    // this.catsRepository.update(cat);
  }
  async  findAll():Promise <CreateCats[]>{
    //buscara todos elementos do bd
    return this.catsRepository.find();
  }
  findOne(id: string ){
    const cat = this.cats.filter((value) => value.id === id)
    return cat
    //achar elemento especifico 
  }
  remove(id: string){
    const cats_remove = this.cats.filter((value )=>value.id === id)
    this.cats = cats_remove;
    //remover gato da lista
  } 
  update (id:string, createCatsDto: CreateCatsDto){
    this.cats.map((obj: CreateCatsDto) =>{
      if (obj.id == id){
        obj.name = createCatsDto.name;
        obj.age = createCatsDto.age;
      }
    });
    return this.findOne(id);
    //usar o map     
    //atualizar lista dos gatos
  }
  
}
