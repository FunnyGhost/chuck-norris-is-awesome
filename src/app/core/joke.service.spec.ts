import { inject, TestBed } from '@angular/core/testing';
import { JokeService } from './joke.service';

fdescribe('JokeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JokeService]
    });
  });

  it('should be created', inject([JokeService], (service: JokeService) => {
    expect(service).toBeTruthy();
  }));

  it('should get random jokes', inject([JokeService], (service: JokeService) => {
    expect(true).toBe(false);
  }));
});
