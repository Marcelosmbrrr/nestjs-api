import {
  IsString,
  IsEmail,
  IsNotEmpty,
  MinLength
} from 'class-validator';

import { Match } from 'src/common/decorators/match.decorator';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(6) 
  @IsNotEmpty()
  password: string;

  @IsString()
  @MinLength(6)
  @IsNotEmpty()
  @Match('password')
  confirmPassword: string;
}
