import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { UserModule } from 'src/user/user.module';



@Module({
    imports: [PassportModule, UserModule],
    controllers: [],
    providers: [LocalStrategy],
})
export class AuthModule { }
