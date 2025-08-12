import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../../core/services/about.services';
import { Iabout } from '../../../core/model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-about',
  imports: [CommonModule],
  templateUrl: './manage-about.html',
  styleUrl: './manage-about.css'
})
export class ManageAbout implements OnInit {
  aboutData!: Iabout;

  constructor(private aboutService: AboutService, private router: Router) {}

  ngOnInit(): void {
    this.loadAbout();
  }

  loadAbout() {
    this.aboutService.getAbout().subscribe({
      next: (res) => {
        // assuming only one about exists
        this.aboutData = res[1];
      },
      error: (err) => console.error('Error fetching about:', err)
    });
  }

  updateAbout() {
    // send the about data to AddAboutComponent via navigation state
    this.router.navigate(['/dashboard/updateabout', this.aboutData._id], {
      state: { about: this.aboutData }
    });
  }
}


