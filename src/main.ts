import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(3000);

  const config = new DocumentBuilder()
  .setTitle('Animal Shelter API')
  .setDescription('This is a CRUD API focused on animal shelter management.')
  .setVersion('1.0')
  .addTag('shelter')
  .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

}

bootstrap();