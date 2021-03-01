import { Injectable } from '@nestjs/common';
import {  Player } from './players.entitiy';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Observable, from } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { AuthService } from 'src/auth/auth.service';


@Injectable()
export class PlayerService {
    names = [
        {
          "name": "aron",
          "teamName":"",

          "made": 0,
          "missed": 0,
          "points": 0,
          "percentage": 0,
          "team": 0,
          "shirtNumber": 23,
          "position": "position 1",
          "img": "assets/aron.png",
          "imgball":'assets/aronball.png',
      
          "height": 0
        },
        {
          "name": "shlomo",
          "teamName":"",

          "made": 0,
          "missed": 0,
          "points": 0,
          "percentage": 0,
          "team": 0,
          "shirtNumber": 28,
          "position": "position 2",
          "img": "assets/shlomo.png",
          "imgball":'assets/shlomoball.png',
      
          "height": 6
        },
        {
          "name": "israel",
          "teamName":"",
          "made": 0,
          "missed": 0,
          "points": 0,
          "percentage": 0,
          "team": 0,
          "shirtNumber": 16,
          "position": "position 3",
          "img": "assets/israel.png",
          "imgball":'assets/israelball.png',
          "height": 53
        },
        {
          "name": "evyatar",
          "teamName":"",

          "made": 0,
          "missed": 0,
          "points": 0,
          "percentage": 0,
          "team": 0,
          "shirtNumber": 8,
          "position": "position 4",
          "img": "assets/evyatar.png",
          "imgball":'assets/evyatarball.png',
      
          "height": 92
        },
        {
          "name": "yakov",
          "teamName":"",

          "made": 0,
          "missed": 0,
          "points": 0,
          "percentage": 0,
          "team": 0,
          "shirtNumber": 6,
          "position": "position 5",
          "img": "assets/evia.png",
          "imgball":'assets/eviaball.png',
      
          "height": 31
        },
        {
          "name": "moti",
          "teamName":"",

          "made": 0,
          "missed": 0,
          "points": 0,
          "percentage": 0,
          "team": 0,
          "shirtNumber": 17,
          "position": "position 6",
          "img": "assets/moti.png",
          "imgball":'assets/motiball.png',
      
          "height": 93
        }
      ]
    constructor(
        @InjectRepository(Player)
        private pictureRepository: Repository<Player>,
        private authService: AuthService
      ) {}
     async create(){
         let y 
          for(let player of this.names){
              // console.log(player);
              const newPlayer = new Player()
              
              newPlayer.name = player.name
              newPlayer.team = player.team
              newPlayer.made = player.made
              newPlayer.img = player.img
              newPlayer.missed = player.missed
              newPlayer.points = player.points
              newPlayer.percentage = player.percentage
              newPlayer.shirtNumber = player.shirtNumber
              newPlayer.imgball = player.imgball
              newPlayer.height = player.height
              newPlayer.teamName = player.teamName
          y +=  await  this.pictureRepository.save(newPlayer)


          }
          return y
      }
    
      findAll(): Promise<Player[]> {
        return this.pictureRepository.find();
      }
      findOne(id: number): Observable<any> {
        return from(this.pictureRepository.findOne({ id }))
        

    }
    
      async remove(id: string): Promise<void> {
        await this.pictureRepository.delete(id);
      }
      login(player: Player): Observable<string> {
              return this.findByshirtNumber(player.shirtNumber).pipe(
                switchMap((picture: Player) => {
                    if(picture) {
                      return this.authService.generateJWT(picture).pipe(map((jwt: string) => jwt));
                    } else {
                        return 'Wrong Credentials';
                    }
                })
            )

    }
  //   validateUser(name: string, shirtNumber: string):Observable<Picture>{
  //     return this.authService.generateJWT(user).pipe(map((jwt: string) => jwt));

     
  // }

  
  findByshirtNumber(shirtNumber: number):Observable<Player>{
      // return null
    return from(this.pictureRepository.findOne({ shirtNumber }))
}
}
