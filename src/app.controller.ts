import { Body, Controller, Post } from '@nestjs/common';
import { CreateTeamMemberBody } from './dtos/create-team-member-body';
import { RocketMembersRepository } from './reposotories/rocket-members-repository';

@Controller('app')
export class AppController {
  constructor(private rocketMembersRepository: RocketMembersRepository) {}
  // private prisma: PrismaService

  @Post('hello')
  async getHello(@Body() body: CreateTeamMemberBody) {
    const { name, function: memberFunction } = body;

    await this.rocketMembersRepository.create(name, memberFunction);
  }
}
