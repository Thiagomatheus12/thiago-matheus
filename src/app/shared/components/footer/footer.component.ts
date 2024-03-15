import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  footerLinks = [
    {link: 'email', href: '/email'},
    {link: 'twitter', href: '/twitter'},
    {link: 'github', href: '/github'},
    {link: 'linkedin', href: '/linkedin'},
    {link: 'instagram', href: '/instagram'},
  ]

}
