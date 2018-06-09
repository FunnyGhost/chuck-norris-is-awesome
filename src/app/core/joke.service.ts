import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Joke } from 'src/app/core/joke';
import { environment } from '../../environments/environment';
import { CoreModule } from './core.module';
import { JokeResponse } from './joke-response';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: CoreModule
})
export class JokeService {
  private favorites: Joke[];
  private randomFavoritesSubscription: Subscription;

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {
    this.localStorageService.favorites$.subscribe((favorites: Joke[]) => {
      this.favorites = favorites;
    });
  }

  getRandomJokes(howMany: number): Observable<Joke[]> {
    const urlToCall = `${environment.jokeApiUrl}/${howMany}`;

    return this.http.get<JokeResponse>(urlToCall).pipe(
      map((response: JokeResponse) => {
        return response.value;
      })
    );
  }

  getFavorites(): Observable<Joke[]> {
    return this.localStorageService.favorites$;
  }

  toggleJokeFavorite(joke: Joke): void {
    if (this.isJokeFavorite(joke)) {
      this.favorites = this.favorites.filter((favorite: Joke) => {
        return favorite.id !== joke.id;
      });
    } else {
      this.favorites = [...this.favorites, joke];
    }

    this.localStorageService.setFavorites(this.favorites);
  }

  isJokeFavorite(joke: Joke): boolean {
    return this.favorites.includes(joke);
  }

  addRandomFavorites(): void {
    if (!this.randomFavoritesSubscription) {
      this.randomFavoritesSubscription = interval(5000)
        .pipe(
          switchMap(() => this.getRandomJokes(1)),
          map((jokes: Joke[]) => {
            return jokes[0];
          })
        )
        .subscribe((joke: Joke) => {
          console.log('New favorite joke', joke);
        });
    }
  }

  cancelRandomFavorites(): void {
    if (this.randomFavoritesSubscription) {
      this.randomFavoritesSubscription.unsubscribe();
    }
  }
}
