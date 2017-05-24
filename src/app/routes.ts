import { RouterModule, Routes } from '@angular/router';
import { IndexPage } from './pages/Index.page';

export const routes: Routes = [
  {
    path: '',
    component: IndexPage
  }
];

export const routing = RouterModule.forRoot(routes);
