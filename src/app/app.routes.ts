import { Routes } from '@angular/router';
import { AboutComponent } from './shared/components/about/about.component';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: HomeComponent
  },
  {
    path: 'about',
    title: 'About',
    component: AboutComponent
  },
];
