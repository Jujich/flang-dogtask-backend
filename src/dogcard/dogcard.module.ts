import { Module } from '@nestjs/common';
import { DogcardService } from './dogcard.service';
import { DogcardController } from './dogcard.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { DogapiModule } from '../dogapi/dogapi.module';

@Module({
  controllers: [DogcardController],
  providers: [DogcardService],
  imports: [PrismaModule, DogapiModule],
})
export class DogcardModule {}
