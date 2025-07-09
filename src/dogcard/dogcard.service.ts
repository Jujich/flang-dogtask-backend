import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DogapiService } from '../dogapi/dogapi.service';

@Injectable()
export class DogcardService {
  constructor(
    private dogapiService: DogapiService,
    private prisma: PrismaService,
  ) {}

  async reloadDogs() {
    const dogs: string[] = await this.dogapiService.getAllDogs();
    await this.prisma.dogCard.deleteMany();
    return this.prisma.dogCard.createMany({
      data: dogs.map((dogcard) => ({ imageUrl: dogcard })),
    });
  }
  async findAll(params: { page: number; limit: number }) {
    const { page, limit } = params;
    const skip = (page - 1) * limit;

    const [items, totalItems] = await Promise.all([
      this.prisma.dogCard.findMany({
        skip,
        take: limit,
      }),
      this.prisma.dogCard.count(),
    ]);

    const totalPages = Math.ceil(totalItems / limit);

    return {
      items,
      meta: {
        totalItems,
        itemCount: items.length,
        itemsPerPage: limit,
        totalPages,
        currentPage: page,
      },
    };
  }
  async findOne(id: number) {
    return this.prisma.dogCard.findUnique({ where: { id } });
  }
  async likeDog(id: number) {
    const dog = await this.findOne(id);
    if (!dog) throw new NotFoundException('Not Found');
    return this.prisma.dogCard.update({
      where: { id },
      data: { likes: dog.likes + 1 },
    });
  }
}
