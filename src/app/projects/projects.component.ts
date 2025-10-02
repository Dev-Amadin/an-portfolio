import { Component } from '@angular/core';

@Component({
  selector: 'projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Digital Control UI',
      Description:
        'A modern dashboard to control and monitor multiple IoT devices in one interface.',
      image: 'https://media.istockphoto.com/id/1366732881/photo/smart-home-operating-system-concept-of-future.jpg?b=1&s=612x612&w=0&k=20&c=sMU5KRz54Q2dPUHauib8U1RPASppgpe7tXZsfEKG5yU=',
      link: '',
    },
    {
      title: 'AI review generation tool',
      Description:
        'An AI assisting tool for helping users generate reviews according to their positive or negative feedback ',
      image: 'https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg',
      link: '',
    },
    {
      title: 'Kachasi',
      Description:
        'Kachasi is a trade finance software application built to automate the full lifecycle of international and local trade finance operations.',
      image: 'https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg',
      link: 'https://unionsystems.com/products/kachasi',
    },
  ];
}
