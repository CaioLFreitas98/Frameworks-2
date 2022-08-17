import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { CreateDogsDto } from 'src/dogs/dto/dogs.dto';


@Controller('dogs')
export class DogsController {
    constructor(private dogsService: DogsService) {}
    
    @Get()
        async findAll(): Promise<CreateDogsDto[]> {
        return this.dogsService.findAll();
        }

    @Get(':id')
        getone(@Param ()params): string {
        console.log (params.id)   
        return `seu nome é #${params.id}`;
        }
    @Post()
        async create(@Body()createDogDto: CreateDogsDto):Promise<String>{
        //     return `Estou criando um gato #${createCatDto.name} anos chamado #${createCatDto.name}` ;
        this.dogsService.create(createDogDto)
        return "algo"
        }
    @Get('find-id')       
        findOneMore(@Param(`id`)id: number):string{
        return `Encontrei outro dog${id}`
        }
        @Put(':id')
        update(@Param('id') id: string, @Body() createDogsDto: CreateDogsDto) {
        return `This action updates a #${id} dog`;
        }
    @Delete(':id')
        remove(@Param('id') id: string) {
        return `This action removes a #${id} dog`;
        }

    }
