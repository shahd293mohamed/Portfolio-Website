// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-get-home',
//   imports: [],
//   templateUrl: './get-home.html',
//   styleUrl: './get-home.css'
// })
// export class GetHome {

// }

import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../../core/services/projects.services';
import { Ihome, Iprojects } from '../../../core/model';
import { CommonModule } from '@angular/common';
import { HomeServices } from '../../../core/services/home.services';

@Component({
  selector: 'app-get-home',
  imports: [CommonModule],
  templateUrl: './get-home.html',
  styleUrl: './get-home.css'
})
export class GetHome implements OnInit {
  home: Ihome[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(private _home: HomeServices) {}

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this._home.getHome().subscribe({
      next: (res) => {
        this.home = res;
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Failed to load home';
        this.isLoading = false;
      }
    });
  }
}


