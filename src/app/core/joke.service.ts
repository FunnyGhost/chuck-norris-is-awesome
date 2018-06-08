import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Joke } from 'src/app/core/joke';
import { environment } from '../../environments/environment';
import { CoreModule } from './core.module';
import { JokeResponse } from './joke-response';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: CoreModule
})
export class JokeService {
  favorites: Joke[] = this.localStorageService.getFavorites();

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {}

  getRandomJokes(howMany: number): Observable<Joke[]> {
    const urlToCall = `${environment.jokeApiUrl}/${howMany}`;

    return this.http.get<JokeResponse>(urlToCall).pipe(
      map((response: JokeResponse) => {
        return response.value;
      })
    );
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
}
