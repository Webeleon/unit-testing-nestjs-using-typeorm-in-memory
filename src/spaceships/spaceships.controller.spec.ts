import { Test, TestingModule } from '@nestjs/testing';
import { SpaceshipsController } from './spaceships.controller';
import { TypeOrmSQLITETestingModule } from '../test-utils/TypeOrmSQLITETestingModule';
import { testDatasetSeed } from '../test-utils/testDataset.seed';
import { SpaceshipsService } from './spaceships.service';

describe('SpaceshipsController', () => {
  let controller: SpaceshipsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...TypeOrmSQLITETestingModule()],
      providers: [SpaceshipsService],
      controllers: [SpaceshipsController],
    }).compile();

    controller = module.get<SpaceshipsController>(SpaceshipsController);
    await testDatasetSeed();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
