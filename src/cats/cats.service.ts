import { Injectable } from '@nestjs/common';
import { CreateCatsDto } from './dto/cats.dto';

@Injectable()
export class CatsService {
  private readonly cats: CreateCatsDto[] = [];

  create(cat: CreateCatsDto) {
    this.cats.push(cat);
  }

  findAll(): CreateCatsDto[] {
    return this.cats;
  }
}