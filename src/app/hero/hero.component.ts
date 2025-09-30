import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit {
  roles = [
    { title: 'Software Developer' },
    { title: 'Full Stack Developer' },
    { title: 'Frontend Developer' },
    { title: 'Backend Developer' },
    { title: 'Angular Developer' },
    { title: 'Java Developer' },
  ];

  currentRoleIndex = 0;
  currentText = '';
  isDeleting = false;
  typingSpeed = 150;

  private timerId: any;

  ngOnInit(): void {
    this.handleTyping();
  }

  private handleTyping() {
    if (!this.roles?.length) return;

    const current = this.roles[this.currentRoleIndex].title;

    if (!this.isDeleting) {
      if (this.currentText === current) {
        // pause at full word, then start deleting
        this.timerId = setTimeout(() => {
          this.isDeleting = true;
          this.typingSpeed = 500;
          this.handleTyping();
        }, 2000);
        return;
      } else {
        this.currentText = current.substring(0, this.currentText.length + 1);
        this.typingSpeed = 150;
      }
    } else {
      if (this.currentText === '') {
        this.isDeleting = false;
        this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
        this.typingSpeed = 500;
      } else {
        // FIX: delete one char at a time
        this.currentText = current.substring(0, this.currentText.length - 1);
        this.typingSpeed = 75;
      }
    }

    this.timerId = setTimeout(() => this.handleTyping(), this.typingSpeed);
  }

  ngOnDestroy(): void {
    clearTimeout(this.timerId);
  }
}
