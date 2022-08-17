import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CreateCats{
    @PrimaryGeneratedColumn()
    id:string; //UUID
    name:string;
    age:number;
}