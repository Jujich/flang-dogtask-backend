import { PartialType } from '@nestjs/mapped-types';
import { CreateDogcardDto } from './create-dogcard.dto';

export class UpdateDogcardDto extends PartialType(CreateDogcardDto) {}
