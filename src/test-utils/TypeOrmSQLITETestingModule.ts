import { TypeOrmModule } from '@nestjs/typeorm';
import { Spaceship } from '../spaceships/spaceship.entity';

export const TypeOrmSQLITETestingModule = () => [
  TypeOrmModule.forRoot({
    type: 'better-sqlite3',
    database: ':memory:',
    dropSchema: true,
    entities: [Spaceship],
    synchronize: true,
  }),
  TypeOrmModule.forFeature([Spaceship]),
];
