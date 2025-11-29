import { Routes } from '@angular/router';

export const featuresRoutes: Routes = [
  {
    path: 'welcome',
    loadComponent: () =>
      import('./welcome/welcome-component/welcome.component').then(m => m.WelcomeComponent)
  },
  {
    path: 'generate',
    loadComponent: () => 
      import('./components/generator/generator.component').then(m => m.GeneratorComponent)
  },
  {
    path: 'manage',
    loadComponent: () => 
      import('./components/parameter-management/parameter-management.component').then(m => m.ParameterManagementComponent)
  },
  {
    path: 'article/:id',
    loadComponent: () =>
      import('./components/article/view-article/view-article.component')
        .then(m => m.ViewArticleComponent)
  }
];