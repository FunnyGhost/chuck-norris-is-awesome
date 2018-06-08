import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { Joke } from 'src/app/core/joke';
import { JokeService } from '../core/joke.service';
import { JokeListComponent } from './joke-list.component';
import { JokeComponent } from './joke/joke.component';

const testJokes: Joke[] = [
  {
    id: 1,
    joke: 'Batman vs Superman'
  },
  {
    id: 2,
    joke: 'Green Lantern'
  }
];

describe('JokeListComponent', () => {
  let component: JokeListComponent;
  let fixture: ComponentFixture<JokeListComponent>;
  let jokeService: JokeService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [JokeListComponent, JokeComponent],
      providers: [JokeService]
    }).compileComponents();
  }));

  beforeEach(() => {
    jokeService = TestBed.get(JokeService);
    fixture = TestBed.createComponent(JokeListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a list of 10 jokes', () => {
    const numberOfJokes = 10;
    const getJokesSpy = spyOn(jokeService, 'getRandomJokes').and.returnValue(of(testJokes));
    fixture.detectChanges();

    const jokeElements = fixture.debugElement.queryAll(By.css('app-joke'));
    expect(getJokesSpy).toHaveBeenCalledWith(numberOfJokes);
    expect(jokeElements.length).toBe(testJokes.length);
  });

  it('should handle the toggle favorite joke ', () => {
    const toggleJokeSpy = spyOn(jokeService, 'toggleJokeFavorite');
    const jokeToUse = testJokes[0];
    component.onToggleJokeFavorite(jokeToUse);

    expect(toggleJokeSpy).toHaveBeenCalledWith(jokeToUse);
  });
});
