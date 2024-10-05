import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/*
 * Tipos de Aplicações no NestJS:
 *
 * 1. Aplicação HTTP: Criada com NestFactory.create
 *    - Ideal para construir servidores web que respondem a requisições HTTP.
 *
 * 2. Microserviço: Criado com NestFactory.createMicroservice
 *    - Utilizado para desenvolver serviços independentes que se comunicam entre si.
 *
 * 3. Aplicação Standalone: Criada com NestFactory.createApplicationContext
 *    - Permite executar código NestJS sem expor uma interface de rede, útil para tarefas de fundo ou scripts.
 */


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
