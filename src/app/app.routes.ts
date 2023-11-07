import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'calendar', pathMatch: 'full'},
  {
    path: 'calendar',
    loadComponent: () => import('./components/calendar/calendar.component').then(c => c.CalendarComponent)
  },
  {
    path: 'task-list',
    loadComponent: () => import('./components/task-list/task-list.component').then(c => c.TaskListComponent)
  },
  {path: '**', redirectTo: 'calendar', pathMatch: 'full'}
];
