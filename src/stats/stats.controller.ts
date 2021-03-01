import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { StatsService } from './stats.service';
import { Plstats } from './plstats.entity';
import { GameService } from './game.service';

@Controller('stats')
export class StatsController {
    constructor(private statsService: StatsService, private gameService: GameService) { }

    @Post('')
    playerStats(@Body() playerStats: Plstats) {
        console.log(9999999999999);

        return this.statsService.create(playerStats)



    }
    @Post('game')
    gameStats(@Body() gameStats) {
        console.log(gameStats);

        return this.gameService.create(gameStats)



    }
    @Get('game')
    getAll() {
        return this.gameService.findAll()

    }
    @Get('game/:id')
    async getCurrentGame(@Param() params) {
        return [await this.gameService.findCurrentGame(params.id)]

    }
    @Get()
    getAllPl() {
        return this.statsService.findAll()

    }

    @Get(':id')
    getByName(@Param() params) {
        return this.statsService.findByName(params.id)

    }
}

