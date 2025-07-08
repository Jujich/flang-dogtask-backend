import { Module } from '@nestjs/common';
import { DogapiService } from './dogapi.service';

@Module({
  providers: [DogapiService],
  exports: [DogapiService],
})
export class DogapiModule {}
