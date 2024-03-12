import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  headerLinks = [
    {link: 'ABOUT'},
    {link: 'ARTICLES'},
    {link: 'PROJECTS'},
    {link: 'TALKS'},
    {link: 'PODCASTS'},
    {link: 'INVESTING'},
    {link: 'USES'},
    {link: 'REMINDER'},
  ]
}
