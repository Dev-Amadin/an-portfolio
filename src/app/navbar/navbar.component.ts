import { ViewportScroller } from '@angular/common';
import { Component, HostListener, inject, signal } from '@angular/core';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {


  scroller = inject(ViewportScroller);

  navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  activeSection = signal('home');

  @HostListener('window:scroll', [])
  handleScroll() {
    const sections = document.querySelectorAll('section');
    let current = 'home';

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      if (window.scrollY >= sectionTop - 200) {
        current = section.id;
      }
    });

    this.activeSection.set(current);
  }

  scrollTo(sectionId:string){
    this.scroller.scrollToAnchor(sectionId)
  }
}
