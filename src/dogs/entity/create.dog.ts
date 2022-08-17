import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CreateDogs{
    @PrimaryGeneratedColumn()
    id:string; //UUID
    name:string;
    age:number;
}