import { Controller, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post('/login')
  @UseGuards(AuthGuard("local"))
  getHello(): string {
    return 'congratulation you have successfully login';
  }
}
