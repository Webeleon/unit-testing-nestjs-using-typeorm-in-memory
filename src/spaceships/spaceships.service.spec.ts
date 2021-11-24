import { Test, TestingModule } from '@nestjs/testing';
import { SpaceshipsService } from './spaceships.service';
import { TypeOrmSQLITETestingModule } from '../test-utils/TypeOrmSQLITETestingModule';
import { testDatasetSeed } from '../test-utils/testDataset.seed';

describe('SpaceshipsService', () => {
  let service: SpaceshipsService;
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [...TypeOrmSQLITETestingModule()],
      providers: [SpaceshipsService],
    }).compile();

    service = module.get<SpaceshipsService>(SpaceshipsService);
    await testDatasetSeed();
  });

  afterEach(() => {
    module.close();
  });

  it('listSpaceships', async () => {
    const spaceships = await service.listSpaceships();
    expect(spaceships).toHaveLength(3);
  });
});
