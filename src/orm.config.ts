import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Player } from './players/players.entitiy';
import { Plstats } from './stats/plstats.entity';
import { Game } from './stats/gameStats.entity';

export const configPlayer:TypeOrmModuleOptions ={
    type: 'postgres',
    username:'postgres',
    password:'aron1988',
    port:5432,
    host:'127.0.0.1',
    database:'basketball',
    synchronize: true,
    entities: [Player,Plstats,Game]
}
