import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';
import { UserSeeder } from 'src/database/seeder/user-seeder.service';

async function bootstrap() {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const userSeeder = appContext.get(UserSeeder);
  await userSeeder.seed();
  await appContext.close();
}

bootstrap()
  .then(() => console.log('Seeding completed'))
  .catch((err) => console.error('Seeding failed', err));
