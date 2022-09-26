import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { jwtSecret } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { JwtAuthGuard, UserAdminGuard, UserAdminOrManagerGuard } from './jwt-auth.guard';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
      session: true
    }),
    JwtModule.register({
      secret: jwtSecret,
      signOptions: { expiresIn: '86400s' }
    })
  ],
  controllers: [],
  providers: [JwtStrategy, JwtAuthGuard, UserAdminGuard, UserAdminOrManagerGuard],
  exports: [PassportModule, JwtModule]
})
export class AuthModule {}
