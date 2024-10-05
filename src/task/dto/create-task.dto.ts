import { IsString, IsEnum, IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsEnum({ open: 'open', running: 'running', finished: 'finished', canceled: 'canceled' })
  situation: string;
}
