import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { SeederModule } from './database/seeder/seeder.module';

// Src: https://docs.nestjs.com/techniques/configuration#configuration
import { ConfigModule, ConfigType } from '@nestjs/config';
import appConfig from './common/config/app.config';
import jwtConfig from './common/config/jwt.config';
import typeormConfig from './common/config/typeorm.config';

// Src: https://docs.nestjs.com/techniques/database
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UserModule,
    TaskModule,
    SeederModule,
    ConfigModule.forRoot({
      load: [appConfig, jwtConfig, typeormConfig],
      envFilePath: '.env',
      isGlobal: true,
      cache: true,
    }),
    TypeOrmModule.forRootAsync({
      inject: [typeormConfig.KEY],
      useFactory: (config: ConfigType<typeof typeormConfig>) => config,
    }),
  ],
})
export class AppModule {}
