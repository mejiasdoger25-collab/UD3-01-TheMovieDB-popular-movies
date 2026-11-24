import { Routes } from '@angular/router';
import { PopularMoviesPage } from './pages/popular-movies-page/popular-movies-page';
import { NotFoundPage } from './pages/not-found-page/not-found-page';

export const routes: Routes = [
    {path: 'movies', component: PopularMoviesPage},
    {path: '', pathMatch: 'full', redirectTo: 'movies'},
    {path: '**', component: NotFoundPage}
];
