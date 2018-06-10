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

  private _getRandomFavorites = false;
  set getRandomFavorites(value) {
    this._getRandomFavorites = value;
    if (value) {
      this.jokeService.addRandomFavorites();
    } else {
      this.jokeService.cancelRandomFavorites();
    }
  }
  get getRandomFavorites(): boolean {
    return this._getRandomFavorites;
  }

  constructor(private jokeService: JokeService) {}

  ngOnInit() {
    this.refreshJokes();
    this.favorites$ = this.jokeService.getFavorites();
  }

  refreshJokes() {
    this.jokes$ = this.jokeService.getRandomJokes(10);
  }

  onToggleJokeFavorite(joke: Joke): void {
    this.jokeService.toggleJokeFavorite(joke);
  }

  isJokeFavorite(joke: Joke): boolean {
    return this.jokeService.isJokeFavorite(joke);
  }
}
