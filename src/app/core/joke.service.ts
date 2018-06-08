import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Joke } from 'src/app/core/joke';
import { environment } from '../../environments/environment';
import { CoreModule } from './core.module';
import { JokeResponse } from './joke-response';

@Injectable({
  providedIn: CoreModule
})
export class JokeService {
  constructor(private http: HttpClient) {}

  getRandomJokes(howMany: number): Observable<Joke[]> {
    const urlToCall = `${environment.jokeApiUrl}/${howMany}`;

    return this.http.get<JokeResponse>(urlToCall).pipe(
      map((response: JokeResponse) => {
        return response.value;
      })
    );
  }
}
