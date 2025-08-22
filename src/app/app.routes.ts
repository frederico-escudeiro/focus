import { Routes } from '@angular/router';
import { Home } from './home/home';
import { NotFound } from './not-found/not-found';
import { Courses } from './courses/courses';

export const routes: Routes = [
    { path: '', component: Courses, title: 'Focus' },
    //{ path: 'boards', loadComponent: () => import('./boards/boards').then(m => m.Boards) },
    //{ path: 'boards/:id', loadComponent: () => import('./boards/board/board').then(m => m.Board) },
    { path: '**', component: NotFound }
];
