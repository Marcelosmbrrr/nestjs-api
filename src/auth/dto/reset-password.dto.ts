import { IsString, MinLength, IsNotEmpty } from 'class-validator';

import { Match } from 'src/common/decorators/match.decorator';

export class ResetPasswordDto {
  @IsString()
  @IsNotEmpty()
  token: string;

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
