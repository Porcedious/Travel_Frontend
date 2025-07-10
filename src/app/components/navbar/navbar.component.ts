import { Component, Output, EventEmitter, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TravelDataService } from '../../services/travel-data.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [CommonModule, RouterModule]
})
export class NavbarComponent {
  @Output() destinationClicked = new EventEmitter<string>();
  isLoginModalOpen = false;
  isScrolled = false;
  isHidden = false;
  lastScrollY = 0;
  user: any;
  destinations: any;

  constructor(
    private travelDataService: TravelDataService,
    public authService: AuthService,
    private router: Router
    ) {
    this.authService.currentUser$.subscribe(user => {
      this.user = user;
    });
    }

  async gotodestination() {
    await this.router.navigate(['/destinations'])
  }

  @HostListener('window:scroll', [])
  onWindowScroll() 
  {
    const currentScrollY = window.scrollY;
    // this.isHidden = currentScrollY > this.lastScrollY && currentScrollY > 100;
    this.isScrolled = currentScrollY > 50;
    this.lastScrollY = currentScrollY;
  }

  openLoginModal() {
    this.isLoginModalOpen = true;
  }

  closeLoginModal() {
    this.isLoginModalOpen = false;
  }

  onDestinationClick(destinationId: string): void {
    this.destinationClicked.emit(destinationId);
  }
}
