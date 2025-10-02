import { Component } from '@angular/core';

@Component({
  selector: 'experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  experiences = [
    {
      logo: '../../assets/logos/user-tie.svg',
      company: 'Union Systems Ltd.',
      duration: '2018 - 2023',
      description:
        'Focus: Angular UI for trade finance, team leadership, UAT delivery',
      skills: [
        'HTML',
        'CSS',
        'CSS',
        'SCSS',
        'TypeScript',
        'Bootstrap',
        'Angular',
        'Java',
        'Spring Boot',
        'MySQL',
      ],
    },
    {
      logo: '../../assets/logos/user-tie.svg',
      company: 'Woodcore Inc.',
      duration: '2022 (contract)',
      description: 'Focus: Mobile banking UI, Angular admin dashboard',
      skills: [
        'HTML',
        'CSS',
        'SCSS',
        'TypeScript',
        'Bootstrap',
        'Angular',
        'Ionic',
        'Postman',
      ],
    },
    {
      logo: '../../assets/logos/hourglass.svg',
      company: 'Freelance',
      duration: '2021 - Present',
      description:
        'Production-ready Angular/Java applications with reusable components',
      skills: [
        'HTML',
        'CSS',
        'SCSS',
        'TypeScript',
        'Bootstrap',
        'Tailwind',
        'Angular',
        'Ionic',
        'Java',
        'Spring Boot',
        'Firebase',
      ],
    },
  ];
}
