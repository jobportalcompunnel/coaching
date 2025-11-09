import { Routes } from '@angular/router';

export const routes: Routes = [

   {
    path: '',
    redirectTo: 'cab',
    pathMatch: 'full',
  },
    {
    path: 'cab',
    // 🔑 LATEST PATTERN: Lazy-load the feature's route file directly
    loadChildren: () => import('./features/cab/cab.routes').then(m => m.CAB_ROUTES),
  },
];
