import { Test, TestingModule } from '@nestjs/testing';
import { SpaceshipsService } from './spaceships.service';
import { TypeOrmSQLITETestingModule } from '../test-utils/TypeOrmSQLITETestingModule';
import { testDatasetSeed } from '../test-utils/testDataset.seed';

describe('SpaceshipsService', () => {
  let service: SpaceshipsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...TypeOrmSQLITETestingModule()],
      providers: [SpaceshipsService],
    }).compile();

    service = module.get<SpaceshipsService>(SpaceshipsService);
    await testDatasetSeed();
  });

  it('listSpaceships', async () => {
    const spaceships = await service.listSpaceships();
    expect(spaceships).toHaveLength(3);
  });
});
