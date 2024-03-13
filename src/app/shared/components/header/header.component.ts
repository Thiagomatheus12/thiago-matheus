import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  headerLinks = [
    {link: 'ABOUT', href: '/about'},
    {link: 'ARTICLES', href: '/articles'},
    {link: 'PROJECTS', href: '/projects'},
    {link: 'TALKS', href: '/taalks'},
    {link: 'PODCASTS', href: '/podcasts'},
    {link: 'INVESTING', href: '/investing'},
    {link: 'USES', href: '/uses'},
    {link: 'REMINDER', href: '/reminder'},
  ]
}
