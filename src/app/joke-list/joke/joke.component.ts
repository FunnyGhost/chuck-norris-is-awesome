import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Joke } from 'src/app/core/joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {
  @Input() joke: Joke;
  @Input() isFavorite: boolean;

  @Output() toggleFavorite = new EventEmitter<Joke>();

  constructor() {}

  ngOnInit() {}

  onToggleFavorite(): void {
    this.toggleFavorite.emit(this.joke);
  }
}
