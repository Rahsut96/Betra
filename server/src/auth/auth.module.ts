import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
    }),
    JwtModule.register({
      // not getting value of process.env.SECRETKEY
      // secret: process.env.SECRETKEY,
      // expiresIn: process.env.EXPIRESIN
      //
      secret: 'K14z7mBf1DxSEKZUHjvxhT5xSGK1JD0l',
      signOptions: {
        expiresIn: process.env.EXPIRESIN || '1h',
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [PassportModule, JwtModule],
})
export class AuthModule {}
