import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CreateCatsDto{
    @PrimaryGeneratedColumn()
    id:string; //UUID
    name:string;
    age:number;
}