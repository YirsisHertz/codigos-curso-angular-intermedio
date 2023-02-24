import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skills = {
    frontend: [
      {
        name: 'React',
        level: 80,
        color: '#00D8FF',
      },
      {
        name: 'Angular',
        level: 90,
        color: '#E23237',
      },
      {
        name: 'Vue',
        level: 95,
        color: '#41B883',
      },
      {
        name: 'Svelte',
        level: 80,
        color: '#FF3E00',
      },
      {
        name: 'Astro',
        level: 90,
        color: '#000000',
      },
    ],
    cssFrameworks: [
      {
        name: 'Bootstrap',
        level: 95,
        color: '#7E13F8',
      },
      {
        name: 'Tailwind',
        level: 80,
        color: '#1AAEBA',
      },
      {
        name: 'Semantic',
        level: 90,
        color: '#34BDB2',
      },
    ],
    backend: [
      {
        name: 'Laravel',
        level: 95,
        color: '#FF2D20',
      },
      {
        name: 'Express',
        level: 80,
        color: '#222222',
      },
      {
        name: 'Spring',
        level: 90,
        color: '#6DB33F',
      },
    ],
    databases: [
      {
        name: 'MongoDB',
        level: 95,
        color: '#01EC64',
      },
      {
        name: 'MySQL',
        level: 80,
        color: '#00758F',
      },
      {
        name: 'PostgreSQL',
        level: 90,
        color: '#336791',
      },
    ],
  };
}
