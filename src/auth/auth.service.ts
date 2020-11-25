import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PlayerService } from 'src/players/players.service';
import { Player } from 'src/players/players.entitiy';
import { Observable, from } from 'rxjs';
const bcrypt = require('bcrypt');


@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService
    ) { }

    generateJWT(picture: Player): Observable<string> {
        return from(this.jwtService.signAsync({ picture }))

    }
    // hashPassword(password: string): Observable<string> {
    //     return from<string>(bcrypt.hash(password, 12))

    // }
    // comparePassword(newPassword: string, passwordHash: string): Observable<any | boolean> {
    //     return from<any | boolean>(bcrypt.compare(newPassword, passwordHash))

    // }
}


