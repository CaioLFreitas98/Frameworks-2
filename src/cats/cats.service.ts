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
