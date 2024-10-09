import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Src: https://docs.nestjs.com/openapi/introduction
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
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
  const app = await NestFactory.create(AppModule);

  /*
   * Configuração da documentação da API usando o Swagger.
   * As opções definidas incluem título, descrição e versão.
   */
  const config = new DocumentBuilder()
    .setTitle('Tasks Api')
    .setDescription('Tasks api built with Nestjs')
    .setVersion('1.0')
    .addTag('task')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
