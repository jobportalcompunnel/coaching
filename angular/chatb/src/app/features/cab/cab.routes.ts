import { Routes } from '@angular/router';

export const CAB_ROUTES: Routes = [
  {
    path: '',
    // 1. FIX APPLIED: cab-layout component
    loadComponent: () =>
      import('./components/cab-layout/cab-layout.component')
      .then(m => m.CabLayoutComponent), // <--- FIX added
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      // 2. FIX APPLIED: view/:id
      {
        path: 'view/:id',
        loadComponent: () =>
          import('./components/cab-view-driver/cab-view-driver')
          .then(m => m.CabViewDriverComponent), // <--- FIX added
        title: 'View Driver',
      },
      // 3. CORRECT (Already fixed in your code)
      {
        path: 'list',
        loadComponent: () =>
          import('./components/cab-list-driver/cab-list-driver')
          .then(m => m.default), // <-- Already correct
        title: 'Driver List',
      },
      // 4. FIX APPLIED: edit/:id
      {
        path: 'edit/:id',
        loadComponent: () =>
          import('./components/cab-edit-driver/cab-edit-driver')
          .then(m => m.CabEditDriverComponent), // <--- FIX added
        title: 'Edit Driver',
      },
    ],
  },
];