import { getConnection } from 'typeorm';
import { Spaceship } from '../spaceships/spaceship.entity';

export const testDatasetSeed = async () => {
  const connection = await getConnection();
  const entityManager = connection.createEntityManager();

  entityManager.insert<Spaceship>(Spaceship, {
    name: 'moa',
    type: 'cruiser',
    origin: 'caldari',
  });
  entityManager.insert<Spaceship>(Spaceship, {
    name: 'caracal',
    type: 'cruiser',
    origin: 'caldari',
  });
  entityManager.insert<Spaceship>(Spaceship, {
    name: 'rokh',
    type: 'battleship',
    origin: 'caldari',
  });
};
