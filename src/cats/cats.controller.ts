import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatsDto } from './dto/cats.dto';
import { CreateCats } from './entity/create.cat';


@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}

    @Get()
        async findAll(): Promise<CreateCats[]> {
        return this.catsService.findAll();
        }
    
    @Get(':id')
        getone(@Param ()params): string {
        console.log (params.id)   
        return `seu nome é #${params.id} bichano`;
        }
    @Post()
        async create(@Body()createCatDto: CreateCatsDto):Promise<string>{
    //     return `Estou criando um gato #${createCatDto.name} anos chamado #${createCatDto.name}` ;
        this.catsService.create(createCatDto)
        return "algo"
        }
    @Get('find-id')       
        findOneMore(@Param(`id`)id: number):string{
        return `Encontrei outro cat ${id}`
        }
    @Put(':id')
        update(@Param('id') id:string, @Body() createCatsDto: CreateCatsDto) {
        return `This action updates a #${id} cat`;
        }
    @Delete(':id')
        remove(@Param('id') id: string) {
        return `This action removes a #${id} cat`;
        }

}




