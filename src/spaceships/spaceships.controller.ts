import { Controller, Get } from '@nestjs/common';
import { SpaceshipsService } from './spaceships.service';

@Controller('spaceships')
export class SpaceshipsController {
  constructor(private readonly spaceshipsService: SpaceshipsService) {}

  @Get()
  listSpaceships() {
    return this.spaceshipsService.listSpaceships();
  }
}
