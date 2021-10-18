import { Module } from '@nestjs/common';
import { SpaceshipsController } from './spaceships.controller';
import { SpaceshipsService } from './spaceships.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Spaceship } from './spaceship.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Spaceship])],
  controllers: [SpaceshipsController],
  providers: [SpaceshipsService],
})
export class SpaceshipsModule {}
