import { Component, ElementRef, HostListener, OnInit, ViewChild, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { DialogListComponent } from '../../shared/components/dialog-list/dialog-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    FooterComponent,
    RouterModule,
    DialogListComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  isDialogOpen = false;

  router = inject(Router);

  constructor(private elementref: ElementRef) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.isDialogOpen = true;
  }

  closeDialog(): void {
    this.isDialogOpen = false;
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

  @HostListener('document:click', ['$event.target'])
  onCloseClick(target: HTMLElement): void {
    console.log('target', target.querySelector('.home__'))
    console.log('target', target)
  }
}
