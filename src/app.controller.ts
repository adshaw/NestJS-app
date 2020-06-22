import { Controller, Request, Post, UseGuards, Get, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './guards/local.auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './guards/jwt.auth.guard';
import { CreateUserDTO } from './users/create-user.dto';

@Controller()
export class AppController {
  constructor(private appService: AppService, private authService: AuthService) {
  }

  @Get('/')
  getHello() {
    return this.appService.getHello();
  }

  // @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Body() createUser: CreateUserDTO, @Request() req) {
    console.log('Authenticating user', createUser);
    return this.authService.login(createUser);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req){
    return req.user;
  }


}
