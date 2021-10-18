import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Spaceship } from './spaceship.entity';

@Injectable()
export class SpaceshipsService {
  constructor(
    @InjectRepository(Spaceship)
    private spaceshipsRepository: Repository<Spaceship>,
  ) {}

  async listSpaceships(): Promise<Spaceship[]> {
    return this.spaceshipsRepository.find({});
  }
}
