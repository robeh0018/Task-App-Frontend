import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full'},

  /** Auth routes */
  {
    path: 'auth',
    loadComponent: () => import('./auth').then(c => c.AuthComponent),
  },

  /** Features routes */
  {
    path: '',
    loadComponent: () => import('./components').then(c => c.HomeComponent),
    children: [
      {
        path: 'calendar',
        loadComponent: () => import('./components').then(c => c.CalendarComponent)
      },
      {
        path: 'task-list',
        loadComponent: () => import('./components').then(c => c.TaskListComponent)
      },
    ]
  },
  {path: '**', redirectTo: 'auth', pathMatch: 'full'}
];
