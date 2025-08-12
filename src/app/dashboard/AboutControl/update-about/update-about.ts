// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-update-about',
//   imports: [],
//   templateUrl: './update-about.html',
//   styleUrl: './update-about.css'
// })
// export class UpdateAbout {

// }

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AboutService } from '../../../core/services/about.services';
import { Iabout } from '../../../core/model';

@Component({
  selector: 'app-update-about',
  imports: [ReactiveFormsModule],
  templateUrl: './update-about.html',
  styleUrl: './update-about.css'
})
export class UpdateAbout implements OnInit {
  
  aboutForm!: FormGroup;

  constructor(
    private aboutService: AboutService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Get the ID from the route (example: /dashboard/update-about/1)
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.aboutService.getAbout().subscribe({
        next: (res) => {
          // find the about with matching id
          const aboutData = res.find(a => a._id?.toString() === id);
          if (aboutData) {
            this.aboutForm = new FormGroup({
              name: new FormControl(aboutData.name),
              title: new FormControl(aboutData.title),
              bio: new FormControl(aboutData.bio),
              profileImage: new FormControl(null)
            });
          }
        },
        error: (err) => console.error('Error fetching about:', err)
      });
    }
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.aboutForm.patchValue({
        profileImage: file
      });
    }
  }

  // submit(): void {
  //   const id = this.route.snapshot.paramMap.get('id');
  //   if (!id) return;

  //   let formData = new FormData();
  //   formData.append('name', this.aboutForm.get('name')?.value);
  //   formData.append('title', this.aboutForm.get('title')?.value);
  //   formData.append('bio', this.aboutForm.get('bio')?.value);
  //   if (this.aboutForm.get('profileImage')?.value) {
  //     formData.append('profileImage', this.aboutForm.get('profileImage')?.value);
  //   }

  //   this.aboutService.updateAbout(id, formData).subscribe({
  //     next: (res) => {
  //       console.log('Updated successfully', res);
  //     },
  //     error: (err) => console.error('Error updating about:', err)
  //   });
  // }

//   submit(): void {
//   const id = this.route.snapshot.paramMap.get('id');
//   if (!id) return;

//   let formData = new FormData();

//   if (this.aboutForm.get('name')?.dirty) {
//     formData.append('name', this.aboutForm.get('name')?.value);
//   }
//   if (this.aboutForm.get('title')?.dirty) {
//     formData.append('title', this.aboutForm.get('title')?.value);
//   }
//   if (this.aboutForm.get('bio')?.dirty) {
//     formData.append('bio', this.aboutForm.get('bio')?.value);
//   }
//   if (this.aboutForm.get('profileImage')?.value) {
//     formData.append('profileImage', this.aboutForm.get('profileImage')?.value);
//   }

//   this.aboutService.updateAbout(id, formData).subscribe({
//     next: (res) => console.log('Updated successfully', res),
//     error: (err) => console.error('Error updating about:', err)
//   });
// }

submit(): void {
  const id = this.route.snapshot.paramMap.get('id');
  if (!id) return;

  const payload: any = {};
  if (this.aboutForm.get('name')?.dirty) payload.name = this.aboutForm.get('name')?.value;
  if (this.aboutForm.get('title')?.dirty) payload.title = this.aboutForm.get('title')?.value;
  if (this.aboutForm.get('bio')?.dirty) payload.bio = this.aboutForm.get('bio')?.value;

  this.aboutService.updateAbout(id, payload).subscribe({
    next: (res) => console.log('Updated successfully', res),
    error: (err) => console.error('Error updating about:', err)
  });
}


}
