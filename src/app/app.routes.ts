import { Routes } from '@angular/router';
import { Home } from './home/home';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
    { path: '', component: Home, title: 'Focus' },
    { path: 'boards', loadComponent: () => import('./boards/boards').then(m => m.Boards) },
    { path: 'boards/:id', loadComponent: () => import('./boards/board/board').then(m => m.Board) },
    { path: '**', component: NotFound }
];
