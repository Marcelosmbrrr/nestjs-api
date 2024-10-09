import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export default registerAs<TypeOrmModuleOptions>('TYPEORM_MODULE_CONFIG', () => {
  return {
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT, 10) || 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    migrationsRun: true,
    synchronize: true,
    autoLoadEntities: true,
    logging: true,
    logger: 'file',
  };
});
