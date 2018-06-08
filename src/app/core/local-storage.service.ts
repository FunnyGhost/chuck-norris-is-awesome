import { Injectable } from '@angular/core';
import { CoreModule } from './core.module';
import { Joke } from './joke';

@Injectable({
  providedIn: CoreModule
})
export class LocalStorageService {
  readonly FAVORITES_KEY = 'favorites';

  constructor() {}

  setFavorites(favorites: Joke[]): void {
    localStorage.setItem(this.FAVORITES_KEY, JSON.stringify(favorites));
  }

  getFavorites(): Joke[] {
    const favorites = localStorage.getItem(this.FAVORITES_KEY);

    return (JSON.parse(favorites) as Joke[]) || [];
  }
}
