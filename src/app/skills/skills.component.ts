import { Component } from '@angular/core';

@Component({
  selector: 'skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skillData = [
    {
      title: 'Frontend | Mobile',
      skills: [
        { name: 'HTML5', icon: '../../assets/logos/html5.svg' },
        { name: 'CSS3', icon: '../../assets/logos/css3.svg' },
        { name: 'SCSS', icon: '../../assets/logos/sass.svg' },
        { name: 'Javascript', icon: '../../assets/logos/JavaScript.svg' },
        { name: 'TypeScript', icon: '../../assets/logos/TypeScript.svg' },
        { name: 'Angular', icon: '../../assets/logos/angular.svg' },
        { name: 'Tailwind', icon: '../../assets/logos/Tailwind CSS.svg' },
        { name: 'rxjs', icon: '../../assets/logos/rxjs.svg' },
        { name: 'Bootstrap', icon: '../../assets/logos/bootstrap.svg' },
        { name: 'Ionic', icon: '../../assets/logos/Ionic.svg' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Spring Boot', icon: '../../assets/logos/Spring.svg' },
        { name: 'MySQL', icon: '../../assets/logos/MySQL.svg' },
        { name: 'ProstgresSQL', icon: '../../assets/logos/PostgresSQL.svg' },
        { name: 'OracleDB', icon: '../../assets/logos/Oracle.svg' },
        { name: 'Rest API', icon: '../../assets/logos/rest API.svg' },
        { name: 'Firebase', icon: '../../assets/logos/Firebase.svg' },
        { name: 'SQL Developer', icon: '../../assets/logos/SQL Developer.svg' },
      ],
    },
    {
      title: 'Languages',
      skills: [
        { name: 'JavaScript', icon: '../../assets/logos/JavaScript.svg' },
        { name: 'TypeScript', icon: '../../assets/logos/TypeScript.svg' },
        { name: 'Java', icon: '../../assets/logos/Java.svg' },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', icon: '../../assets/logos/git.svg' },
        { name: 'GitHub', icon: '../../assets/logos/github.svg' },
        { name: 'GitLab', icon: '../../assets/logos/gitlab.svg' },
        { name: 'Bitbucket', icon: '../../assets/logos/bitbucket.svg' },
        { name: 'Postman', icon: '../../assets/logos/Postman.svg' },
        { name: 'VS code', icon: '../../assets/logos/VS Code.svg' },
        { name: 'InteliJ', icon: '../../assets/logos/IntelliJ IDEA.svg' },
      ],
    },
  ];
}
