import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { JokeComponent } from './joke.component';

describe('JokeComponent', () => {
  let component: JokeComponent;
  let fixture: ComponentFixture<JokeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JokeComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the given joke', () => {
    expect(true).toBe(false);
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
