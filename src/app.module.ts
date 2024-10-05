import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TaskModule } from './task/task.module';
import { SeederModule } from './database/seeder/seeder.module';

// Src: https://docs.nestjs.com/techniques/configuration#configuration
import { ConfigModule, ConfigService } from '@nestjs/config';
import appConfig from './common/config/app.config';
import jwtConfig from './common/config/jwt.config';
import dbConfig from './common/config/db.config';

// Src: https://docs.nestjs.com/techniques/database
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

@Module({
  imports: [
    UserModule,
    AuthModule,
    TaskModule,
    SeederModule,

    ConfigModule.forRoot({
      load: [appConfig, jwtConfig, dbConfig],
      envFilePath: '.env',
      isGlobal: true,
      cache: true,
    }),

    // forRootAsync para permitir a injeção de dependências, neste caso, o ConfigService.
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService): TypeOrmModuleOptions => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class AppModule {}
