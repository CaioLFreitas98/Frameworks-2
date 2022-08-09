import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get()
        findAll():string{
        return" estou ouvindo cats...";
        }
    
    @Get('nome')
        create(): string {
        return 'seu nome é bichano';
        }
        
}



