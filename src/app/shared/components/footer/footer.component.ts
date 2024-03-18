import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  footerLinks = [
    {link: 'email', href: 'mailto:thiagomtsdev.contato@gmail.com', src: '/assets/icons/email.png'},
    {link: 'github', href: 'https://github.com/Thiagomatheus12', src: '/assets/icons/github.png'},
    {link: 'linkedin', href: 'https://www.linkedin.com/in/thiago-matheus-99b98b239/', src: '/assets/icons/linkedin.png'},
    {link: 'instagram', href: 'https://www.instagram.com/thiagomts01/', src: '/assets/icons/instagram.png'},
  ]

}
