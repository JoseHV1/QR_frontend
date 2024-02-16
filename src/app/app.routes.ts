import { Routes } from '@angular/router';
import { GenerateComponent } from './generate/generate.component';

export const routes: Routes = [
  {
    path: '',
    component: GenerateComponent,
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
