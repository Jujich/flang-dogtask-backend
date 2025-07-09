import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { DogcardService } from './dogcard.service';
import { DogapiService } from '../dogapi/dogapi.service';
import { PrismaService } from '../prisma/prisma.service';

@Controller('dogcard')
export class DogcardController {
  constructor(private readonly dogcardService: DogcardService) {
    const dogapiService = new DogapiService();
    const prismaService = new PrismaService();
    this.dogcardService = new DogcardService(dogapiService, prismaService);
  }

  @Get()
  findAll(@Query('page') page: number = 1, @Query('limit') limit: number = 10) {
    return this.dogcardService.findAll({
      page: Number(page),
      limit: Number(limit),
    });
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.dogcardService.findOne(+id);
  }

  @Post(':id/like')
  likeDog(@Param('id') id: number) {
    return this.dogcardService.likeDog(Number(id));
  }

  @Post('/reload')
  reloadDogs() {
    return this.dogcardService.reloadDogs();
  }
}
