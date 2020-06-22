import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){

  private logger: Logger = new Logger('LocalStrategy');

  constructor(private authService: AuthService) {
    super();
  }

  async validate(email: string, password: string): Promise<any>{
    console.log('validating user...');
    const user = this.authService.validateUser(email, password);
    this.logger.log('Validating Logsss');
    if(!user){
      throw new UnauthorizedException()
    }
    return user;
  }

}
