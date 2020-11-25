import { Controller, Post, Get, Body, Param, UseGuards } from '@nestjs/common';
import {  PlayerService } from './players.service';
import { Player } from './players.entitiy';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { JwtAuthGuard } from 'src/auth/gurds/jwt-auth.guard';


@Controller('players')
export class PlayersController {
    constructor(private playerService:PlayerService)  {}
    @Get('create')
    create(){
        return this.playerService.create()

    }
    // @UseGuards(JwtAuthGuard)
    @Get()
    getAll(){
        return this.playerService.findAll()

    }
    @Get(':id')
    findOne(@Param() params): Observable<Player[]> { 
        return this.playerService.findOne(params.id)
    }
    @Post('login')
    login(@Body() picture: Player): Observable <Object> {
        console.log(33333333333333333);
        
        return this.playerService.login(picture).pipe(
            map((jwt:string)=>{
                return {access_token: jwt}
            }),
        )        
    }

   
}
