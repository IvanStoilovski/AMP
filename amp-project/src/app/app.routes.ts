import { Routes } from '@angular/router';
import { featuresRoutes } from '../features/features.routes';

export const routes: Routes = [
   ...featuresRoutes,
   { path: '', redirectTo: 'welcome', pathMatch: 'full'},
   {path: '**', redirectTo: 'welcome'}
];
