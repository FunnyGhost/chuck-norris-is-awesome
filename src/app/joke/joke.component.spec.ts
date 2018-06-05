import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Joke } from 'src/app/core/joke';
import { JokeComponent } from './joke.component';

fdescribe('JokeComponent', () => {
  let component: JokeComponent;
  let fixture: ComponentFixture<JokeComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JokeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
  });

  it('should create', () => {
    const jokeToUse: Joke = { id: 1, joke: 'The batmobile is super slow' };
    component.joke = jokeToUse;
    component.isFavorite = false;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should render the given joke', () => {
    const jokeToUse: Joke = { id: 1, joke: 'The batmobile is super slow' };
    component.joke = jokeToUse;
    component.isFavorite = false;
    fixture.detectChanges();

    const jokeElements = de.queryAll(By.css('.joke'));

    expect(jokeElements.length).toBe(1);
    expect(jokeElements[0].nativeElement.innerHTML).toContain(jokeToUse.joke);
  });

  it('should show if a joke is already a favorite', () => {
    const jokeToUse: Joke = { id: 1, joke: 'The batmobile is super slow' };
    component.joke = jokeToUse;
    component.isFavorite = true;
    fixture.detectChanges();

    const favoriteElements = de.queryAll(By.css('.favorite'));

    expect(favoriteElements.length).toBe(1);
  });

  it('should show if a joke is not a favorite', () => {
    const jokeToUse: Joke = { id: 1, joke: 'The batmobile is super slow' };
    component.joke = jokeToUse;
    component.isFavorite = false;
    fixture.detectChanges();

    const favoriteElements = de.queryAll(By.css('.favorite'));

    expect(favoriteElements.length).toBe(0);
  });

  it('should propagate a toggle favorite event when the user favorites the joke', () => {
    expect(true).toBe(false);
  });

  it('should propagate a toggle favorite event when the user unfavorites the joke', () => {
    expect(true).toBe(false);
  });
});
