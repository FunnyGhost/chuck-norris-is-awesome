import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { JokeListComponent } from './joke-list.component';

describe('JokeListComponent', () => {
  let component: JokeListComponent;
  let fixture: ComponentFixture<JokeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JokeListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a list of jokes', () => {
    expect(true).toBe(false);
  });

  it('should handle the toggle favorite joke for a favorited joke', () => {
    expect(true).toBe(false);
  });

  it('should handle the toggle favorite joke for a joke that is not favorited', () => {
    expect(true).toBe(false);
  });

  it('should show an error if the operation of getting the jokes fails', () => {
    expect(true).toBe(false);
  });
});
