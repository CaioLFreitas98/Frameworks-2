import { Injectable } from '@nestjs/common';
import { CreateCatsDto } from './dto/cats.dto';

@Injectable()
export class CatsService {
  private  cats: CreateCatsDto[] = [];

  create (cat: CreateCatsDto){
    this.cats.push(cat);
  }
  findAll():CreateCatsDto[]{
    //buscara todos elementos do bd
    return this.cats;
  }
  findOne(id: number ){
    const cat = this.cats.filter((value) => value.id === id)
    return cat
    //achar elemento especifico 
  }
  remove(id: number){
    const cats_remove = this.cats.filter((value )=>value.id === id)
    this.cats = cats_remove;
    //remover gato da lista
  } 
  update (CreateCatsDto: CreateCatsDto){
    const cat = this.findOne(CreateCatsDto.id);
    //usar o map     
    //atualizar lista dos gatos
  }
  
}
