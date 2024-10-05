import { Injectable } from '@nestjs/common';

import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';

@Injectable()
export class AuthService {
  async register(registerDto: RegisterDto) {
    return { message: 'User registered successfully' }; // Retorno fictício
  }

  async login(loginDto: LoginDto) {
    return { message: 'Login successful' };
  }

  async forgotPassword(forgotPasswordDto: ForgotPasswordDto) {
    return { message: 'Reset password email sent' };
  }

  async resetPassword(resetPasswordDto: ResetPasswordDto) {
    return { message: 'Password reset successfully' };
  }

  async confirmEmail(token: String) {
    return { message: 'Email confirmation successful' };
  }
}
