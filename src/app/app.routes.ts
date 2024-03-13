import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './shared/components/about/about.component';

export const routes: Routes = [
  {
    path: 'about',
    title: 'About',
    component: AboutComponent
  },
];
