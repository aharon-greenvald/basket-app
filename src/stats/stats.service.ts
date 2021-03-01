import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Plstats } from './plstats.entity';
import { PlStatsRepository } from './platats.repository';

@Injectable()
export class StatsService {
    constructor(
        // @InjectRepository(PlStatsRepository)
        private plStatsRepository: PlStatsRepository
      ) {}

async create(plstats){
    return  await this.plStatsRepository.createpl(plstats)

}



findAll() {
    return this.plStatsRepository.findAll();
  }

  
  findOne(id): Promise<Plstats> {
      return this.plStatsRepository.findOne(id);
    }
 async findByName(name): Promise<Plstats[]> {
      return await this.plStatsRepository.findByName(name);
    }
}
