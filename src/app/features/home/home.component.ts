import { Component, HostListener, OnInit, ViewChild, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { Router , RouterModule } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    FooterComponent,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

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

  originalHeaderLinks = [...this.headerLinks];
  isDialogOpen = false;

  router = inject(Router);

  constructor() {}

  openDialog(): void {
    this.isDialogOpen = true;
  }

  closeDialog(): void {
    this.isDialogOpen = false;
  }

  filterLinks(event: any): void {
    const searchTerm = event.target.value.toLowerCase();
    if (searchTerm.trim() === '') {
      this.headerLinks = [...this.originalHeaderLinks];
    } else {
      this.headerLinks = this.originalHeaderLinks.filter(link => link.link.toLowerCase().includes(searchTerm));
    }
  }

  navigateToLink(link: string): void {
    this.router.navigate([link]);
  }
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.ctrlKey && event.key === 'k') {
      event.preventDefault();
      if (!this.isDialogOpen) {
        this.openDialog();
      } else {
        this.closeDialog();
      }
    } else if (event.key === 'Escape' && this.isDialogOpen) {
      event.preventDefault();
      this.closeDialog();
    }
  }



}
