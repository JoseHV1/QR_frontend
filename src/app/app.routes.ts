import { Routes } from '@angular/router';
import { GenerateComponent } from './generate/generate.component';

export const routes: Routes = [
  {
    path: '',
    component: GenerateComponent
    // loadChildren: () =>
    //   import('./generate/generate.component').then(
    //     (item) => item.GenerateComponent
    //   ),
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
