import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({nullable:true})
  date: string;


  @Column({nullable:true})
  gameDuration: string;
  @Column({nullable:true})
  sumPointsTeam1: number;
  
  @Column({nullable:true})
  sumPointsTeam2: number;
  
  @Column({nullable:true})
  sumTeam1Prec: number;


  @Column({nullable:true})
  sumTeam2Prec: number;

  @Column({nullable:true})
  team1name: string;

  @Column({nullable:true})
  team2name: string;



}