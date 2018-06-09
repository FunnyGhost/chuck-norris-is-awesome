import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CoreModule } from './core.module';
import { Joke } from './joke';

@Injectable({
  providedIn: CoreModule
})
export class LocalStorageService {
  readonly FAVORITES_KEY = 'favorites';
  public favorites$: BehaviorSubject<Joke[]> = new BehaviorSubject<Joke[]>([]);

  constructor() {
    this.getFavorites();
  }

  setFavorites(favorites: Joke[]): void {
    if (favorites.length > 10) {
      favorites = favorites.splice(favorites.length - 10, 10);
    }
    localStorage.setItem(this.FAVORITES_KEY, JSON.stringify(favorites));
    this.favorites$.next(favorites);
  }

  private getFavorites(): void {
    const favoritesFromLocalStorage = localStorage.getItem(this.FAVORITES_KEY);
    const favoriteJokes: Joke[] = (JSON.parse(favoritesFromLocalStorage) as Joke[]) || [];

    this.favorites$.next(favoriteJokes);
  }
}
