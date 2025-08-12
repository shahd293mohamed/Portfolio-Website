import { Component } from '@angular/core';
import { Iprojects } from '../core/model';
import { ProjectsService } from '../core/services/projects.services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projectdata: Iprojects[] = [];
  constructor(private _project:ProjectsService){}
  async ngOnInit() {
    await this.getProjects();
  }

  getProjects() {
      this._project.getProjects().subscribe(data => {
        this.projectdata = data
      })
  }


}
