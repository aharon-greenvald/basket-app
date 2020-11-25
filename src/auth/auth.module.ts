import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PlayersModule } from 'src/players/players.module';
import { JwtAuthGuard } from './gurds/jwt-auth.guard';
import { JwtStrategy } from './gurds/jwt.strategy';





@Module({
  imports: [
    forwardRef(() => PlayersModule),  JwtModule.register({
      secret:""+process.env.JWT_SECRET,
      signOptions: { expiresIn: '6055555555555555555555555555s' },
    }),
  ],
  providers: [AuthService,JwtAuthGuard,JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
