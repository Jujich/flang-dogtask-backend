import { Module } from '@nestjs/common';
import { DogcardModule } from './dogcard/dogcard.module';
import { PrismaModule } from './prisma/prisma.module';
import { DogapiModule } from './dogapi/dogapi.module';

@Module({
  imports: [DogcardModule, PrismaModule, DogapiModule],
})
export class AppModule {}
