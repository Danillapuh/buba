import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { compare } from 'bcrypt';
import { LoginDto } from './types/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  login(@Body() info: LoginDto){
    return this.authService.login(info.login, info.password)

  }
}
