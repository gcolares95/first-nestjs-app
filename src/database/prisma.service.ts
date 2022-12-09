/* eslint-disable prettier/prettier */
import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable() // Para conseguir injetar em outros arquivos da aplicação 
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect(); // força conexão com banco de dados
  }

  async enableShutdownHooks(app: INestApplication) { // quando perder conexão com banco de dados,
    this.$on('beforeExit', async () => {            // encerra a aplicação
      await app.close();
    });
  }
}
