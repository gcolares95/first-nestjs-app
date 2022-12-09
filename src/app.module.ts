import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { PrismaRocketMembersRepository } from './reposotories/prisma/prisma-rocket-members-repository';
import { RocketMembersRepository } from './reposotories/rocket-members-repository';

@Module({
  imports: [], // Importar outros módulos
  controllers: [AppController], // Arquivos que recebem chamadas http
  providers: [
    PrismaService,
    {
      provide: RocketMembersRepository,
      useClass: PrismaRocketMembersRepository,
    },
  ],
})
export class AppModule {}
