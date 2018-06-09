import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Joke } from 'src/app/core/joke';
import { environment } from '../../environments/environment';
import { JokeResponse } from './joke-response';
import { JokeService } from './joke.service';
import { LocalStorageService } from './local-storage.service';

describe('JokeService', () => {
  let httpTestingController: HttpTestingController;
  let jokeService: JokeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [JokeService, LocalStorageService]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    jokeService = TestBed.get(JokeService);
  });

  it('should be created', () => {
    expect(jokeService).toBeTruthy();
  });

  it('should get random jokes', () => {
    const numberOfJokesToGet = 2;
    const expectedUrl = `${environment.jokeApiUrl}/${numberOfJokesToGet}`;
    const testData: JokeResponse = {
      type: 'success',
      value: [
        {
          id: 1,
          joke: 'Batman vs Superman'
        },
        {
          id: 2,
          joke: 'Green Lantern'
        }
      ]
    };

    jokeService.getRandomJokes(numberOfJokesToGet).subscribe((jokes: Joke[]) => {
      // Should get the right data
      expect(jokes).toBe(testData.value);
    });

    // Should use the correct url
    const req = httpTestingController.expectOne(expectedUrl);
    expect(req.request.method).toEqual('GET');

    req.flush(testData);

    httpTestingController.verify();
  });
});
