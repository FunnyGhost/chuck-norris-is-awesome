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
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should render the given joke', () => {
    const jokeToUse: Joke = { id: 1, joke: 'The batmobile is super slow' };
    component.joke = jokeToUse;

    fixture.detectChanges();

    const jokeElements = de.queryAll(By.css('.joke'));

    expect(jokeElements.length).toBe(1);
    expect(jokeElements[0].nativeElement.innerHTML).toContain(jokeToUse.joke);
  });

  it('should show if a joke is already a favorite', () => {
    expect(true).toBe(false);
  });

  it('should show if a joke is not a favorite', () => {
    expect(true).toBe(false);
  });

  it('should propagate a toggle favorite event when the user favorites the joke', () => {
    expect(true).toBe(false);
  });

  it('should propagate a toggle favorite event when the user unfavorites the joke', () => {
    expect(true).toBe(false);
  });
});
