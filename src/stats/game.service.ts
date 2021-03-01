import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Plstats } from './plstats.entity';
import { PlStatsRepository } from './platats.repository';
import { Game } from './gameStats.entity';

@Injectable()
export class GameService {
    constructor(
        @InjectRepository(Game)
        private gameStatsRepository: Repository<Game>
      ) {}

async create(gameStats){
    const game = new Game()
    game.date = gameStats.game.date
    game.gameDuration = gameStats.game.gameDuration
    game.sumPointsTeam1 = gameStats.game.sumPointsTeam1
    game.sumPointsTeam2 = gameStats.game.sumPointsTeam2
    game.sumTeam1Prec = gameStats.game.sumTeam1Prec
    game.sumTeam2Prec = gameStats.game.sumTeam2Prec
    game.team1name = gameStats.game.team1name
    game.team2name = gameStats.game.team2name
    console.log(typeof gameStats.game.date);
    

  return await  this.gameStatsRepository.save(game)


}



findAll() {
    return this.gameStatsRepository.find();
  }
 async findCurrentGame(id){
    return await this.gameStatsRepository.findOne(id);

  }

  
//   findOne(id): Promise<Plstats> {
//       return this.plStatsRepository.findOne(id);
//     }
//  async findByName(name): Promise<Plstats[]> {
//       return await this.plStatsRepository.findByName(name);
//     }
}
