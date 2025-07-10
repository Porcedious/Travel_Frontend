import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ViewChildren, QueryList, HostListener, Renderer2, OnDestroy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TravelDataService } from '../../services/travel-data.service'; // Adjust the path as necessary
import { FooterVisibilityService } from '../../services/footer-visibility.service';
import gsap from 'gsap';

@Component({
  selector: 'app-destinations',
  standalone: true,
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css'],
  imports: [CommonModule, MatCardModule,RouterModule]
})
export class DestinationsComponent implements OnInit, AfterViewInit, OnDestroy {
  destinations: any[] = [];
  @ViewChild('list') list!: ElementRef;
  @ViewChildren('listItem') listItems!: QueryList<ElementRef>;
  @ViewChild('container') container!: ElementRef;
  @ViewChild('cursor') cursor?: ElementRef;
  @ViewChild('cursor2') cursor2?: ElementRef;
  @ViewChild('cursor3') cursor3?: ElementRef;
  @ViewChild('switcher') switcher!: ElementRef;

  activeIndex = 0;
  gridTemplateColumns = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private renderer: Renderer2,
    private travelDataService: TravelDataService, // Inject the service
    private footerVisibilityService: FooterVisibilityService
  ) {}

  ngOnInit() {
        this.destinations = this.travelDataService.getAllLocations();
        console.log(this.destinations);
        this.footerVisibilityService.setFooterVisibility(false);
  }

  ngOnDestroy(): void {
    this.footerVisibilityService.setFooterVisibility(true);
  }

  ngAfterViewInit() {
    this.resync();
    this.initCursorEffects();
    this.initHoverEffects();
    this.initLightDarkToggle();
    this.triggerFirstHover();
    
  }
  gsapAnimation(){
    gsap.to(this.container.nativeElement, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out'
    });
  }
  

  setActiveIndex(index: number) {
    this.activeIndex = index;
    const cols = new Array(this.destinations.length).fill('')
      .map((_, i) => index === i ? '10fr' : '1fr')
      .join(' ');
    this.gridTemplateColumns = cols;
  }

  @HostListener('window:resize')
  resync() {
    const w = Math.max(...this.listItems.map(item =>
      item.nativeElement.offsetWidth
    ));
    this.list.nativeElement.style.setProperty('--article-width', `${w}px`);
  }

  navigateToExplore(id: string) {
    this.router.navigate(['/explore', id]);
  }

  private initCursorEffects() {
    this.renderer.listen('document', 'mousemove', (event: MouseEvent) => {
      const x = `${event.clientX}px`;
      const y = `${event.clientY}px`;
  
      this.setCursorPosition(this.cursor, x, y);
      this.setCursorPosition(this.cursor2, x, y);
      this.setCursorPosition(this.cursor3, x, y);
    });
  }

  private setCursorPosition(elRef: ElementRef | undefined, x: string, y: string) {
    if (elRef?.nativeElement) {
      this.renderer.setStyle(elRef.nativeElement, 'left', x);
      this.renderer.setStyle(elRef.nativeElement, 'top', y);
    }
  }

  private initHoverEffects() {
    const hoverTargets = document.querySelectorAll('.hover-target');
    hoverTargets.forEach(el => {
      this.renderer.listen(el, 'mouseover', () => {
        if (this.cursor2?.nativeElement) {
          this.cursor2.nativeElement.classList.add('hover');
        }
        if (this.cursor3?.nativeElement) {
          this.cursor3.nativeElement.classList.add('hover');
        }
      });
      this.renderer.listen(el, 'mouseout', () => {
        if (this.cursor2?.nativeElement) {
          this.cursor2.nativeElement.classList.remove('hover');
        }
        if (this.cursor3?.nativeElement) {
          this.cursor3.nativeElement.classList.remove('hover');
        }
      });
    });
  }

  private initLightDarkToggle() {
    this.renderer.listen(this.switcher.nativeElement, 'click', () => {
      const body = document.body;
      if (body.classList.contains('light')) {
        body.classList.remove('light');
        body.classList.add('dark');
      } else if (body.classList.contains('dark')) {
        body.classList.remove('dark');
      } else {
        body.classList.add('light');
      }
      this.switcher.nativeElement.classList.toggle('switched');
    });
  }

  private triggerFirstHover() {
    const names = document.querySelectorAll('.case-study-name');
    const images = document.querySelectorAll('.case-study-images li');

    names.forEach((name, index) => {
      this.renderer.listen(name, 'mouseenter', () => {
        document.querySelector('.case-study-name.active')?.classList.remove('active');
        document.querySelector('.case-study-images li.show')?.classList.remove('show');

        name.classList.add('active');
        images[index].classList.add('show');
      });
    });

    // Trigger first hover
    (names[0] as HTMLElement)?.dispatchEvent(new Event('mouseenter'));
  }
}
