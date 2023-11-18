import {Routes} from '@angular/router';

/** Core Imports */
import {authGuard} from "./core";

export const routes: Routes = [
  /** Auth routes */
  {
    path: 'auth',
    loadComponent: () => import('./auth').then(c => c.AuthComponent),
  },

  /** Features routes */
  {
    canActivate: [authGuard],
    path: '',
    loadComponent: () => import('./components').then(c => c.HomeComponent),
    children: [
      {
        path: 'calendar',
        loadComponent: () => import('./components').then(c => c.CalendarComponent),
      },
      {
        path: 'task-list',
        loadComponent: () => import('./components').then(c => c.TaskListComponent),
      },

      /** Automatically redirect to calendar */
      {path: '', redirectTo: 'calendar', pathMatch: 'full'},
    ],
  },

  /** Will be the 404 page */
  {path: '**', redirectTo: 'auth', pathMatch: 'full'},

];
