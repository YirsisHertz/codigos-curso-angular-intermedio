import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../core/services/github.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  projects: any[] = [];

  constructor(private readonly githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService.getAllRepositories().subscribe((projects) => {
      console.log(projects);
      this.projects = projects;
    });
  }
}
