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

@Module({
    imports:[TypeOrmModule.forFeature([Player,PlStatsRepository]), forwardRef(() => AuthModule)],
    providers: [PlayerService,StatsService],
  controllers: [PlayersController,StatsController],
  exports: [PlayerService,StatsService]

})
export class PlayersModule {}
