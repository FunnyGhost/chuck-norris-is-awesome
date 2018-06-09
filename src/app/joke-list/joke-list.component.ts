import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Joke } from '../core/joke';
import { JokeService } from '../core/joke.service';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss']
})
export class JokeListComponent implements OnInit {
  jokes$: Observable<Joke[]>;
  favorites$: Observable<Joke[]>;

  private _getRandomJokes = false;
  set getRandomJokes(value) {
    this._getRandomJokes = value;
    if (value) {
      this.jokeService.addRandomFavorites();
    } else {
      this.jokeService.cancelRandomFavorites();
    }
  }
  get getRandomJokes(): boolean {
    return this._getRandomJokes;
  }

  constructor(private jokeService: JokeService) {}

  ngOnInit() {
    this.jokes$ = this.jokeService.getRandomJokes(10);
    this.favorites$ = this.jokeService.getFavorites();
  }

  onToggleJokeFavorite(joke: Joke): void {
    this.jokeService.toggleJokeFavorite(joke);
  }

  isJokeFavorite(joke: Joke): boolean {
    return this.jokeService.isJokeFavorite(joke);
  }
}
