import { Component, inject, OnInit, signal } from '@angular/core';
import { Movie } from '../../intefaces/popular-movies-response';
import { MoviesService } from '../../services/movies-service';

@Component({
  imports: [],
  selector: 'app-popular-movies-page',
  styleUrl: './popular-movies-page.css',
  templateUrl: './popular-movies-page.html',
})
export class PopularMoviesPage implements OnInit {
  moviesService = inject(MoviesService);
  moviesList = signal<Movie[]>([]);

  ngOnInit(): void {
    this.moviesService.getPopularMovies().subscribe((resp) => {
      this.moviesList.set(resp.results);
    });
  }
}