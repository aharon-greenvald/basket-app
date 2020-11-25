import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Player {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable:true})
  name: string;
  @Column({nullable:true})
  teamName: string;
  
  @Column({nullable:true})
  made: number;
  
  @Column({nullable:true})
  img: string;

  @Column({nullable:true})
  missed: number;

  @Column({nullable:true})
  points: number;

  @Column({nullable:true})
  percentage: number;

  @Column({nullable:true})
  team: number;

  @Column({nullable:true})
  shirtNumber: number;

  @Column({nullable:true})
  imgball: string;

  @Column({nullable:true})
  height: number;



}