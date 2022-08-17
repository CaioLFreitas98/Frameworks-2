import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database.module";
import { DogsController } from "./dogs.controller";
import { dogsProviders } from "./dogs.providers";
import { DogsService } from "./dogs.service";

@Module({
  imports: [DatabaseModule ],
  controllers: [ DogsController,],
  providers: [ ...dogsProviders,DogsService],
})
export class CatsModule {}
