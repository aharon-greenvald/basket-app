import { Module, forwardRef } from '@nestjs/common';
import { Player } from './players.entitiy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerService } from './players.service';
import { PlayersController } from './players.controller';
import { AuthModule } from 'src/auth/auth.module';
import { Plstats } from 'src/stats/plstats.entity';
import { StatsService } from 'src/stats/stats.service';
import { StatsController } from 'src/stats/stats.controller';
import { PlStatsRepository } from 'src/stats/platats.repository';
import { Game } from 'src/stats/gameStats.entity';
import { GameService } from 'src/stats/game.service';

@Module({
    imports:[TypeOrmModule.forFeature([Player,PlStatsRepository,Game]), forwardRef(() => AuthModule)],
    providers: [PlayerService,StatsService,GameService],
  controllers: [PlayersController,StatsController],
  exports: [PlayerService,StatsService ]

})
export class PlayersModule {}
