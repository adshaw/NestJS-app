import { Body, Controller, Get, HttpStatus, Post, Req, Res, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './create-user.dto';
import { JwtAuthGuard } from '../guards/jwt.auth.guard';

@Controller('user')
export class UserController {

  constructor(private userService: UserService) {
  }


  @Post('create')
  async addUser(@Res() res, @Body() createUserDTO: CreateUserDTO) {
    console.log('createUserDTO', createUserDTO);
    const user = await this.userService.addUser(createUserDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Customer Successfully created',
      user,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get('users')
  async getAllUsers(@Res() res) {
    const users = await this.userService.getAllUsers();
    return res.status(HttpStatus.OK).json(users);
  }

}
