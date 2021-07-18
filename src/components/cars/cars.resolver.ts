import { Resolver, Query } from '@nestjs/graphql';
import { CarsService } from './cars.service';

@Resolver()
export class CarsResolver {
  constructor(private carsService: CarsService) {}

  @Query(() => String)
  public async cars() {
    return 'Hello and Welcome';
  }
}
