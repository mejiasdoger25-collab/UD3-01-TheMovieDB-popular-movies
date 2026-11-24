import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { PopularMoviesResponse } from '../intefaces/popular-movies-response';

@Service()
export class MoviesService {
  http = inject(HttpClient);

  getPopularMovies(): Observable<PopularMoviesResponse> {
    return this.http.get<PopularMoviesResponse>(
      'https://api.themoviedb.org/3/movie/popular?api_key=x'//apiKey quitada por seguiridad
    );
  }
}
