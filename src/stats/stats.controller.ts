import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { StatsService } from './stats.service';
import { Plstats } from './plstats.entity';

@Controller('stats')
export class StatsController {
    constructor(private statsService:StatsService){}

    @Post('')
    playerStats(@Body() playerStats:Plstats) {
        console.log(9999999999999);
        
         return this.statsService.create(playerStats)
        
        console.log(playerStats);
        

    }
    @Get()
    getAll(){
        return this.statsService.findAll()

    }
    
    @Get(':id')
    getByName(@Param() params){
        return this.statsService.findByName(params.id)

    }
}

