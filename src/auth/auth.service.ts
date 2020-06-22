import { Injectable } from '@nestjs/common';
import { UserService } from '../users/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(private userService: UserService, private jwtService: JwtService) {
  }

  async validateUser(email: string, pass: string): Promise<any> {
    console.log('Validating user...', email)
    const user = await this.userService.getUser(email);
    console.log('user', user);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    console.log('Authenticating', user);
    const isValidate = await this.validateUser(user.email, user.password);
    console.log('isValidate', isValidate);
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
