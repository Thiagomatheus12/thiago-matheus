import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HEADER_LINKS } from '../../constantes/headerLinks';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dialog-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dialog-list.component.html',
  styleUrl: './dialog-list.component.scss'
})
export class DialogListComponent {
  headerLinks = HEADER_LINKS
  isDialogOpen = false;

  router = inject(Router);

  originalHeaderLinks = [...this.headerLinks];

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

}
