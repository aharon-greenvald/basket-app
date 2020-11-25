import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Plstats {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({nullable:true})
  name: string;


  @Column({nullable:true})
  made: number;
  @Column({nullable:true})
  missed: number;
  
  @Column({nullable:true})
  points: number;
  
  @Column({nullable:true})
  percentage: number;


  @Column({nullable:true})
  teamName: string;



}