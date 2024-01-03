import { Routes } from '@angular/router';
import { SearchComponent } from './page/search/search.component';
import { LayoutComponent } from './layout/layout.component';
import { WatchComponent } from './page/watch/watch.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'watch/:id',
    component: WatchComponent,
  },
  {
    path: 'auth/login',
    component: LoginComponent,
  },
  {
    path: 'auth/register',
    component: RegisterComponent,
  },
];
