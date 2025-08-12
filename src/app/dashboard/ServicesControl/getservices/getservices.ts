// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-getservices',
//   imports: [],
//   templateUrl: './getservices.html',
//   styleUrl: './getservices.css'
// })
// export class Getservices {

// }

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-getprojects',
//   imports: [],
//   templateUrl: './getprojects.html',
//   styleUrl: './getprojects.css'
// })
// export class Getprojects {

// }
import { Component, OnInit } from '@angular/core';
import { ServicesServices } from '../../../core/services/services.sevices';
import { Iservices } from '../../../core/model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-getservices',
  imports: [CommonModule],
  templateUrl: './getservices.html',
  styleUrl: './getservices.css'
})
export class Getservices implements OnInit {
  getsevices: Iservices[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(private _services: ServicesServices) {}

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this._services.getservices().subscribe({
      next: (res) => {
        this.getsevices = res;
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


