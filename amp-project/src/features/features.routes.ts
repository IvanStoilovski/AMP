import { Routes } from '@angular/router';

export const featuresRoutes: Routes = [
  {
    path: 'welcome',
    loadComponent: () =>
      import('./welcome/welcome-component/welcome.component').then(m => m.WelcomeComponent)
  },
  {
    path: 'article/:id',
    loadComponent: () =>
      import('./article/view-article/view-article.component')
        .then(m => m.ViewArticleComponent)
  }
];