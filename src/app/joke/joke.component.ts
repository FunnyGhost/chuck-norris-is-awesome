import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Joke } from '../core/joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {
  @Input() joke: Joke;
  @Input() isFavorite: boolean;

  @Output() toggleFavorite = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  onToggleFavorite(): void {
    this.toggleFavorite.emit(this.joke.id);
  }
}
