import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../../core/services/projects.services';
import { Iprojects } from '../../../core/model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-getprojects',
  imports: [CommonModule],
  templateUrl: './getprojects.html',
  styleUrl: './getprojects.css'
})
export class GetProjects implements OnInit {
  projects: Iprojects[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(private _projectsService: ProjectsService) {}

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this._projectsService.getProjects().subscribe({
      next: (res) => {
        this.projects = res;
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Failed to load projects';
        this.isLoading = false;
      }
    });
  }
}

