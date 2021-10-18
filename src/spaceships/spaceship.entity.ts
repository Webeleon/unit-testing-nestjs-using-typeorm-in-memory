import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Spaceship {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  origin: string;
}
