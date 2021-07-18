import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'cars', // name of table
})
@ObjectType()
export class Car {
  @PrimaryGeneratedColumn('uuid') // for db
  @Field() // for graphQL
  id: string; // primitive ts types are converted to DB type by TypeORM

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  dailyPrice: number;

  @Column()
  @Field()
  monthlyPrice: number;

  @Column()
  @Field()
  mileage: string;

  @Column()
  @Field()
  gas: string;

  @Column()
  @Field()
  transmission: 'Manual' | 'Automatic';

  @Column()
  @Field()
  thumbnailUrl: string;
}
