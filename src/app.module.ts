import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmCoreModule } from '@nestjs/typeorm/dist/typeorm-core.module';
import { SpaceshipsModule } from './spaceships/spaceships.module';
import { Spaceship } from './spaceships/spaceship.entity';

@Module({
  imports: [
    TypeOrmCoreModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'unit_testing_nestjs_with_typeorm_in_memory',
      entities: [Spaceship],
      synchronize: true, // use migration in real life project
    }),
    SpaceshipsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
