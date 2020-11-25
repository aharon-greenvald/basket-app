import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayersController } from './players/players.controller';
import { PlayerService } from './players/players.service';
import { PlayersModule } from './players/players.module';
import { configPlayer } from './orm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AuthModule } from './auth/auth.module';
import { StatsController } from './stats/stats.controller';
import { StatsService } from './stats/stats.service';

@Module({
  imports: [TypeOrmModule.forRoot(configPlayer),PlayersModule, AuthModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}

}
