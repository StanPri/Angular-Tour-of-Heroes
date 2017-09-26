import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    // tslint:disable-next-line:one-line
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
}