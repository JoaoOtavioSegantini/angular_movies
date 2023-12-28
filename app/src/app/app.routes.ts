import { Routes } from '@angular/router';
import { SearchComponent } from './page/search/search.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
  },
  { path: 'search', component: SearchComponent },
];
